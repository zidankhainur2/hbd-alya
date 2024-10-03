import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function PopupPesan() {
  return (
    <section className="rounded-3xl shadow-2xl">
      <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
          HAPPY BIRTHDAY ❤️
        </p>

        <h2 className="text-white mt-6 text-2xl font-semibold">
          Hallo Tenshi-chan {"(⁠≧⁠▽⁠≦⁠)"}, hbd yhhh. ini aku ada surat buat kamu. tolong dibaca yaaa!
        </h2>

        <a href="#">
          <Button className="font-medium text-lg sm:text-md hover:bg-red-700 mt-6">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </a>
      </div>
    </section>
  );
}
