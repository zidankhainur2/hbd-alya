"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ghost, HeartPulse, X } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GiftImage {
  src: string;
  description: string;
}

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GiftImage>({
    src: "",
    description: "",
  });

  const images: GiftImage[] = [
    {
      src: "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/gift/gift1.jpg",
      description: "Gelangnya masih ada kok ya wkwk.",
    },
    {
      src: "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/gift/gift2.jpg",
      description:
        "Ini kalo kamu nanya kenapa fotonya blum dipajang, karena kamar saya masih berantakan hehe. oiyaa buat suratnya juga kadang kalo kangen aku baca lagi <3",
    },
    {
      src: "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/gift/gift3.jpg",
      description:
        "Ini bungkus silverqueenya udah gatau kemana wkwk, tapi tenang tulisannya masih ada kok. yang satu lagi juga masih kusimpen di casing hp.",
    },
    {
      src: "https://wphcaxizypgvkbhwkqss.supabase.co/storage/v1/object/public/user%20image/gift/gift4.jpg",
      description:
        "Kalo kalung gausah ditanya lah yaaa, pasti kupake trus kemana-mana.",
    },
  ];

  const openModal = (image: GiftImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Hallo Alya,
        </h1>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-pink-400">
              Happy Birthday Yaa
            </CardTitle>
            <CardDescription className="text-gray-400">
              Ini hadiah dari aku buat kamu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-300">
              Maaf ya alyaa kalo terkesannya ini hadiah gajelas wkwkwk. Aku
              bingung banget mau ngasih kamu hadiah kek apa, milih barang
              pusing, mau ngirim kesananya juga gatau gimana hehe. Jadi aku
              bikin ini karena yaa cuma ini yang kebetulan aku bisa. Maaf ya
              kalo ini ga sesuai ekspetasi kamu.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-blue-400">
              Aplikasi Lain
            </CardTitle>
            <CardDescription className="text-gray-400">
              Ini ada beberapa web yang aku bikin juga sebelumnya, kali kamu
              gabut mau nyobain wkwk. (teken aja iconnyaa)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                <CarouselItem className="flex flex-col items-center justify-center p-4">
                  <a
                    href="https://dpr-app-mauve.vercel.app/love-meter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <HeartPulse className="h-16 w-16 mb-2 text-red-400 hover:text-red-300" />
                  </a>
                  <h3 className="text-lg font-semibold text-white">
                    Love Meter
                  </h3>
                  <p className="text-center text-sm text-gray-400">
                    Ukur love metermu, kemarin pas aku tes kita <b>99%</b> si
                    wkwk
                  </p>
                </CarouselItem>
                <CarouselItem className="flex flex-col items-center justify-center p-4">
                  <a
                    href="https://dpr-app-mauve.vercel.app/cek-kodam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <Ghost className="h-16 w-16 mb-2 text-blue-400 hover:text-blue-300" />
                  </a>
                  <h3 className="text-lg font-semibold">Cek Kodam</h3>
                  <p className="text-center text-sm text-gray-400">
                    Periksa kodammu hari ini apa
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-8 -mt-10" />
              <CarouselNext className="mr-8 -mt-10" />
            </Carousel>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-green-400">
              About Ur Gift
            </CardTitle>
            <CardDescription className="text-gray-400">
              Oh iyaa aku juga mau laporan tentang hadiah hadiah yang udah kamu
              kasih. Aku selalu nyimpen semuanya kok. Jadi aku harap kamu juga
              selalu inget sama hadiah ku ini yaa! (fyi gambarnya bisa di klik)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image.src}
                    alt={`gift ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-gray-800 text-gray-100 border-gray-700">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="grid gap-4 py-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={selectedImage.src}
                alt="Selected gift"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-sm text-gray-300">{selectedImage.description}</p>
          </div>
        </DialogContent>
      </Dialog>

      <Card className="mb-8 bg-gray-800 border-gray-700 mx-5 my-4">
        <CardHeader>
          <Button
            className=" p-5 mb-3 bg-blue-500/50 hover:bg-blue-500"
            onClick={toggleMenu}
          >
            <CardTitle className="text-lg sm:text-2xl text-white">
              Mini Secret Games
            </CardTitle>
          </Button>
          <CardDescription className="text-gray-400 text-center">
            ada something yang kamu harus tau, but u have to solve it alone hehe
          </CardDescription>
        </CardHeader>
        {isOpen ? (
          <CardContent className="hidden">
            <p className="text-sm sm:text-base text-gray-300">
              Oh iyaa aku juga mau ngasih tau, kalo sebenernya ada 1 halaman
              yang tersembunyi di web ini, nah itu bisa kebuka pas kondisi
              tertentu terpenuhi. kondisinya kek apa? aku gamau ngasih tau kamu
              wleee. ada 2 cara sebenernya: 1. Penuhin Kondisi yang gatau itu
              apa, 2. Bikin cara gimana caranya biar aku kasih tau kondisinya
              tuh apa. Semangat yhh kalo penasaran. isi halamannya bisa bikin
              anda terkejut mwehehee. Semangat!!
            </p>
          </CardContent>
        ) : (
          <CardContent>
            <p className="text-sm sm:text-base text-gray-300 text-justify">
              Oh iyaa aku juga mau ngasih tau, kalo sebenernya ada{" "}
              <b>1 halaman yang tersembunyi</b> di web ini, nah itu bisa kebuka
              pas kondisi tertentu terpenuhi. kondisinya kek apa? aku gamau
              ngasih tau kamu wleee. ada 2 cara sebenernya: 1. Penuhin Kondisi
              yang gatau itu apa, 2. Bikin cara gimana caranya biar aku kasih
              tau kondisinya tuh apa. Semangat yhh kalo penasaran. isi
              halamannya bisa bikin anda terkejut mwehehee. Semangat!!
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default AboutPage;
