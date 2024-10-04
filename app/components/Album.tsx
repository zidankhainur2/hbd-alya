import Image from "next/image";
import Link from "next/link";

export default function Album() {
  return (
    <div>
      <h1 className="text-white text-lg font-medium mb-2 text-center">ALBUM</h1>
      <p className="text-gray-400 text-sm text-center mb-6">
        Lookout our Album
      </p>
      <div className="flex flex-col pb-16 gap-4">
        <Link href="/album/alya" className="block">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Image
              alt="image1"
              src="https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/alya/alya1.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <p className="block text-xs text-white/90">15</p>
                <h3 className="mt-0.5 text-lg text-white cursor-pointer">
                  Foto Alya
                </h3>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/album/fotbar" className="block">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Image
              alt="fotbar"
              src="https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/fotbar/fotbar1.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <p className="block text-xs text-white/90">9</p>
                <h3 className="mt-0.5 text-lg text-white cursor-pointer">
                  Fotbar Ceunah
                </h3>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/album/dpr" className="block">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Image
              alt="fotbar"
              src="https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/dpr/dpr4.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={500}
              height={500}
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <p className="block text-xs text-white/90">16</p>
                <h3 className="mt-0.5 text-lg text-white cursor-pointer">
                  DPR
                </h3>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
}
