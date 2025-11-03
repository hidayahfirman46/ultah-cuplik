import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Cake, Camera, Sunrise, Sparkles, BookOpen } from "lucide-react";
import { StoryPage } from "./components/StoryPage";
import { MusicPlayer } from "./components/MusicPlayer";
import { Confetti } from "./components/Confetti";
import { FloatingHearts } from "./components/FloatingHearts";
import { Stars } from "./components/Stars";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Page 0: Cover
    {
      id: 0,
      title: "",
      background: "img/bg.jpg",
      overlay: "rgba(0, 0, 0, 0.5)",
      isCover: true,
      content: (
        <>
          <FloatingHearts count={25} />
          <Stars count={80} />
          
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/cover.jpg"
              alt="Romantic couple illustration"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full mx-auto border-2 md:border-4 border-white/30 shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-4 md:mb-8"
          >
            <BookOpen className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-pink-300 mx-auto" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white text-center mb-4"
          >
            Kisah Cinta Kita
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-pink-200 text-center text-base md:text-lg lg:text-xl mb-6 md:mb-12 px-4"
          >
            Dari Pandangan Pertama Hingga Selamanya
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-sm border-2 border-white/30 shadow-2xl mb-6 md:mb-12 mx-4"
          >
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-1 md:mb-2">Untuk:</p>
            <p className="text-white text-2xl md:text-4xl lg:text-5xl mb-1 md:mb-2">Prasticia ❤️</p>
            <p className="text-pink-100 text-sm md:text-base lg:text-lg">Orang terpenting dalam hidupku</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(1)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 md:px-12 md:py-4 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 mx-auto transition-all"
          >
            <Heart className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
            <span className="text-base md:text-lg">Buka Cerita</span>
            <Heart className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
          </motion.button>
        </>
      ),
    },

    // Page 1: Opening
    {
      id: 1,
      title: "Kisah Cinta Kita",
      background: "img/bg1.jpg",
      overlay: "rgba(139, 69, 139, 0.5)",
      content: (
        <>
          <Confetti />
          
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 1.jpg"
              alt="Birthday celebration"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl md:rounded-2xl mx-auto shadow-2xl border-2 md:border-4 border-pink-300/50"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl mb-3 md:mb-4 px-4">
            Hai  Prasticia cintaku, hari ini kamu tambah dewasa —<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>tapi jangan khawatir, cintaku tetap remaja 😜💖
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-pink-200 text-sm md:text-lg lg:text-xl px-4"
          >
            Selamat ulang tahun Sayangkuu, orang yang bikin hari-hariku selalu berwarna.
          </motion.p>
        </>
      ),
    },

    // Page 2: First Sight
    {
      id: 2,
      title: "Pandangan Pertama",
      background: "img/bg2.jpg",
      overlay: "rgba(9, 9, 9, 0.4)",
      content: (
        <>
          <FloatingHearts count={15} />
          
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 2.png"
              alt="School romance"
              className="w-49 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-2xl md:rounded-3xl mx-auto shadow-2xl border-2 md:border-4 border-red-300/40 transform rotate-3"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
           
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed px-4">
            Waktu itu di SMAN 1 Tarik secara tidak sengaja aku melihat kamu ,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>dan waktu itu aku langsung suka padamu .
          </p>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 md:mt-6"
          >
            <p className="text-pink-300 text-sm md:text-base lg:text-lg px-4">✨ Cinta pada pandangan pertama ✨</p>
          </motion.div>
        </>
      ),
    },

    // Page 3: Watching from Afar
    {
      id: 3,
      title: "Dari Kejauhan",
      background: "img/bg3.jpg",
      overlay: "rgba(1, 1, 1, 0.5)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 3.png"
              alt="Romantic sunset"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl md:rounded-2xl mx-auto shadow-2xl border-2 md:border-4 border-yellow-300/40"
            />
          </motion.div>
          
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute top-1/4 left-1/4"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 border-2 md:border-4 border-yellow-300 rounded-full" />
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-3 md:mb-4 px-4">
            Aku cuma bisa lihat dari jauh dan melihatmu dikagumi oleh banyak orang dan juga banyak yang suka <br className="hidden sm:block" />
            <span className="sm:hidden"> </span> dan ini membuatku takut menyapa, takut berharap dan segan untuk mendekatimu.
          </p>
          <p className="text-yellow-200 text-sm md:text-base lg:text-lg px-4">
            Kamu begitu populer, dikelilingi banyak orang.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>dan aku pun memilih untuk menyerah.
          </p>
        </>
      ),
    },

    // Page 4: First Contact
    {
      id: 4,
      title: "Perkenalan Lewat DM",
      background: "img/bg4.jpeg",
      overlay: "rgba(0, 0, 0, 0.6)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 4.png"
              alt="Phone messaging"
              className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-xl md:rounded-2xl mx-auto shadow-2xl border-2 md:border-4 border-blue-300/40 transform -rotate-2"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            
          </motion.div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 max-w-sm md:max-w-md mx-auto">
            {["Hai! 😊", ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.3 }}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 mb-2 md:mb-3 text-sm md:text-base"
              >
                {msg}
              </motion.div>
            ))}
          </div>
          <p className="text-pink-200 text-sm md:text-base lg:text-lg mt-4 md:mt-6 px-4">
            Awalnya cuma bercanda dan mengejek mu lewat DM,dan ini aku memberanikan diri mengirim DM setelah 5 tahun memendam rasa bukan karena tidak berani mengirim karena sebelum nya kamu sudah mempunyai pacar lalu<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>tapi entah kenapa malah menjadi notif yang paling aku tunggu .
          </p>
        </>
      ),
    },

    // Page 5: Getting Closer
    {
      id: 5,
      title: "Awal Pendekatan",
      background: "img/bg5.jpg",
      overlay: "rgba(75, 0, 130, 0.5)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 5.png"
              alt="Cafe date"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl md:rounded-3xl mx-auto shadow-2xl border-2 md:border-4 border-purple-300/40"
            />
          </motion.div>
          
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="flex gap-2 md:gap-4 justify-center mb-4 md:mb-6">
            </div>
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-3 md:mb-4 px-4">
            Dari DM Instagram dan akhirnya berganti ke nomer WA lalu bercanda dan mulai menunggu masing-masing kabar ,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>tiga kali kencan dan ku beranikan untuk menyatakan perasaanku, dua minggu menunggu jawaban darinya dengan alasan ingin menimbang karena ada trauma yang kau meiliki
          </p>
          <p className="text-pink-200 text-sm md:text-base lg:text-lg px-4">
            Akhirnya aku tahu,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>kamu juga punya rasa yang sama. ❤️
          </p>
        </>
      ),
    },

    // Page 6: Dating
    {
      id: 6,
      title: "Tiga Tahun Bersama",
      background: "img/bg6.jpg",
      overlay: "rgba(26, 20, 19, 0.4)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 6.png"
              alt="Couple together"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto shadow-2xl border-2 md:border-4 border-pink-300/50"
            />
          </motion.div>
          
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6"></div>
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-3 md:mb-4 px-4">
            pertama pacaran canggung,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>sekarang malah jadi tempat pulang.
          </p>
          <p className="text-yellow-200 text-sm md:text-base lg:text-lg px-4">
            Tiga tahun, dan masih terasa seperti hari pertama dan juga semakin mencintaimu. 🌅
          </p>
        </>
      ),
    },

    // Page 7: Special Moments
    {
      id: 7,
      title: "Kenangan Terindah",
      background: "https://images.unsplash.com/photo-1598623549917-a38dc6cd19b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xhcm9pZCUyMHBob3RvcyUyMG1lbW9yaWVzfGVufDF8fHx8MTc2MjEzMzYxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      overlay: "rgba(70, 130, 180, 0.6)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 7.jpg"
              alt="Polaroid memories"
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-lg md:rounded-xl mx-auto shadow-2xl border-4 md:border-8 border-white/80 transform rotate-6"
            />
         </motion.div>

<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ delay: 0.6, type: "spring" }}
>

</motion.div>

<p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-8 px-4">
  Setiap senyummu adalah kenangan,<br className="hidden sm:block" />
  <span className="sm:hidden"> </span>setiap foto menyimpan cerita.
</p>

<div className="grid grid-cols-3 gap-2 md:gap-4 max-w-xs md:max-w-md mx-auto px-4">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.8 + i * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="aspect-square bg-white/20 backdrop-blur-sm rounded-md md:rounded-lg border-2 md:border-4 border-white shadow-lg overflow-hidden"
    >
      <img
        src={`/img/photo/photo${i}.jpeg`}   // ✅ path dan ekstensi sudah benar
        alt={`Foto ${i}`}
        className="object-cover w-full h-full"
      />
    </motion.div>
  ))}
</div>


        </>
      ),
    },

    // Page 8: Future Together
    {
      id: 8,
      title: "Rencana Masa Depan",
      background: "img/bg7.jpg",
      overlay: "rgba(255, 215, 0, 0.3)",
      content: (
        <>
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 8.png"
              alt="Future dreams"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl md:rounded-2xl mx-auto shadow-2xl border-2 md:border-4 border-yellow-300/40"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            
          </motion.div>
          <p className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-3 md:mb-4 px-4">
            Semoga langkah kita selalu searah dan dipermudah untuk ke jenjang yang serius .
          </p>
          <motion.p
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-yellow-200 text-sm md:text-base lg:text-lg px-4"
          >
            Aku ingin masa depanku tetap bersamamu dan menjalani hidup bersamamu. 
          </motion.p>
        </>
      ),
    },

    // Page 9: Birthday Wishes
    {
      id: 9,
      title: "Selamat Ulang Tahun",
      background: "https://images.unsplash.com/photo-1594273255015-6d432e36e488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNhbmRsZXMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIxMzM2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overlay: "rgba(255, 105, 180, 0.5)",
      content: (
        <>
          <Confetti count={80} />
          
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 9.png"
              alt="Birthday candles"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto shadow-2xl border-2 md:border-4 border-pink-300/50"
            />
          </motion.div>
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 px-4"
          >
            Selamat ulang tahun Prasticia cintaku, semoga menjadi pribadi yang lebih baik dan semua doamu dikabulkan aminn
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-pink-200 text-base md:text-lg lg:text-xl px-4"
          >
            Lovee youu ayangkuuu cintakuu cantikkuu. 🌸
          </motion.p>
        </>
      ),
    },

    // Page 10: Closing
    {
      id: 10,
      title: "Selamanya Bersamamu",
      background: "https://images.unsplash.com/photo-1602009178093-743e06d91af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMHJvbWFudGljfGVufDF8fHx8MTc2MjEzMzYxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      overlay: "rgba(25, 25, 112, 0.5)",
      content: (
        <>
          <Stars />
          
          {/* Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            <ImageWithFallback
              src="img/halaman 10.png"
              alt="Starry night"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-xl md:rounded-2xl mx-auto shadow-2xl border-2 md:border-4 border-yellow-200/40"
            />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
           
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white text-base md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6 px-4"
          >
            Dari awal pertemuan sampai detik ini cintaku akan terus tumbuh,<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>aku tahu… kamu adalah rumahku dan tujuan hidupku. 
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-yellow-200 text-sm md:text-base lg:text-lg mb-3 md:mb-4 px-4"
          >
            Selamat ulang tahun Prasticia Wahyu Audytia, cintaku sayangkuuu.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="text-pink-200 text-sm md:text-base lg:text-lg px-4"
          >
            Mari terus menulis kisah ini bersama hingga surga . ✨💖
          </motion.p>
        </>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <StoryPage
            title={pages[currentPage].title}
            backgroundImage={pages[currentPage].background}
            backgroundOverlay={pages[currentPage].overlay}
            content={pages[currentPage].content}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Hidden on cover page */}
      {currentPage > 0 && (
        <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPage}
            disabled={currentPage === 0}
            className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center disabled:opacity-30 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.button>

          {/* Page Indicators - Skip cover page */}
          <div className="flex gap-1.5 md:gap-2">
            {pages.slice(1).map((_, index) => (
              <motion.button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index + 1 === currentPage
                    ? "bg-pink-400 w-6 md:w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center disabled:opacity-30 hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.button>
        </div>
      )}

      {/* Music Player */}
      <MusicPlayer />

      {/* Page Counter - Hidden on cover page */}
      {currentPage > 0 && (
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-40 bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white">
          <span className="text-xs md:text-sm">
            {currentPage} / {pages.length - 1}
          </span>
        </div>
      )}
    </div>
  );
}
