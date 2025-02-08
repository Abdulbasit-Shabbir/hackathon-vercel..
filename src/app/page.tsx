import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Nike Bar Section */}
      <div className="text-center px-4 py-8 bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold">Hello Nike App</h1>
        <p className="mt-2 text-sm md:text-xs">
          Download the app to access everything Nike&apos;s
          <span className="font-semibold text-blue-500"> Get Your Great</span>
        </p>
      </div>

      <Image className="w-full" src="/homeimage.png" alt="Shoe" height={700} width={1344} priority />

      {/* First Look Section */}
      <div className="px-4 text-center">
        <h2 className="text-sm md:text-xl font-serif mb-2">First Look</h2>
        <h1 className="text-xl md:text-3xl font-bold mb-4">NIKE AIR MAX PULSE</h1>
        <p className="text-lg md:text-xl font-sans mx-auto max-w-3xl mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/help"><button className="bg-black text-white px-6 py-2 rounded-3xl">Notify Me</button></Link>
          <Link href="/store"><button className="bg-black text-white px-6 py-2 rounded-3xl">Shop Air Max</button></Link>
        </div>
      </div>

      {/* Best of Air Max */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-200">
        <p className="text-lg font-medium">Best of Air Max</p>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Shop</span>
          <button className="bg-black text-white px-3 py-1 rounded-full">&lt;</button>
          <button className="bg-black text-white px-3 py-1 rounded-full">&gt;</button>
        </div>
      </div>




      {/* Featured Section */}
      <div>
        <Link href="/store">
          <Image className="w-full" src="/Feature.png" alt="Featured products" width={1344} height={700} />
        </Link>
      </div>

      {/* Gear Up */}
      <div className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold">Gear Up</h2>
      </div>

      {/* Essential Section */}
      <div>
        <Image className="w-full" src="/essential.png" alt="essential" width={1344} height={700} />
      </div>

      <div className="px-4 text-center mt-20">
        <h2 className="text-sm md:text-3xl font-bold mb-6">FLIGHT ESSENTIAL</h2>
        <p className="text-sm md:text-xl font-medium mx-auto max-w-3xl mb-6">
          Your build-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <div className="flex justify-center">
          <Link href="/store"><button className="bg-black text-white px-5 py-2 rounded-3xl">Shop</button></Link>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/store">
          <Image className="w-full" src="/clothes.png" alt="clothes products" width={1344} height={700} />
        </Link>
        <div className="mt-10">
          <Image className="w-full" src="/categories.png" alt="categories" width={1344} height={700} />
        </div>
      </div>
    </div>
  );
}
