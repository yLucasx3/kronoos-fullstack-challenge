"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { enviroment } from "@/server/enviroment";
import { toast } from "sonner";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { toggleIsUploaded } from "@/redux/features/transaction-slice";

const schema = z.object({
  sheet: z
    .instanceof(File, { message: "Please upload a file." })
    .refine((f) => f.size < 300000 * 1024, "Max 30 GB upload size.")
    .refine(
      (file) => file.type === "text/csv",
      "Files with the .csv extension are allowed"
    ),
});

const UploadSpreadsheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ sheet }: z.infer<typeof schema>) => {
    const url = `${enviroment.apiUrl}/transactions/upload-csv`;

    const formData = new FormData();
    formData.append("file", sheet);

    const response = await fetch(url, { method: "POST", body: formData });

    const data = await response.json();

    if (data.success) {
      toast("CSV uploaded with successfully.");
      setIsOpen(false);
      dispatch(toggleIsUploaded());
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Upload sheet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create bulk transactions</DialogTitle>
          <DialogDescription>
            Here you can add transactions in bulk from uploading a spreadsheet.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="sheet"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Choose a sheet with transactions data</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      placeholder="Sheet"
                      type="file"
                      accept=".csv"
                      onChange={(event) =>
                        onChange(event.target.files && event.target.files[0])
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadSpreadsheet;
