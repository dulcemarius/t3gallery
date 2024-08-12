import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/99eb7b90-604d-4296-8418-d7480aa2032a-t5tet9.jpg",
  "https://utfs.io/f/668f507e-ce54-4958-ba57-6d12408b32e0-gzzyxb.jpg",
  "https://utfs.io/f/c7ad38c3-f581-4d31-8a48-37715924bb03-k1qbwz.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
id:index +1,url
}))

export default function HomePage() {
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">{
      [...mockImages,...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url}/>
        </div>
      ))
    }
    </div>
    </main>
  );
}
