import React from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MovieButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="font-medium text-lg sm:text-md bg-gray-500/25 hover:bg-gray-500/50 text-white"
        >
          <Info className="mr-2 h-4 w-4" /> Learn More
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mohon Perhatian!</DialogTitle>
        </DialogHeader>
        <div className="grid place-items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-16 w-16 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <DialogDescription className="text-center text-xl font-semibold text-red-500">
            Kamu harus baca ini!
          </DialogDescription>
          <DialogDescription className="text-center">
            Plss banget tolong explore web ini keseluruhan yaa, anggap aja itu
            bentuk kamu ngehargain aku yang udah bikin ini hehe. oh iya kamu
            bisa ke menu{" "}
            <a href="#" className="text-red-500">
              about
            </a>{" "}
            buat liat tutorial webnya!
          </DialogDescription>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogTrigger asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button type="button" className="mb-3">
              Paham? (nada kak gem)
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
