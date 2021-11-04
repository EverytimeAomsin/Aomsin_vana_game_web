/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.discordapp.com/attachments/605765871646015527/905615435637088307/mbg.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-4xl">
                  Story of Product Knowledge
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                   เรียนรู้ไปพร้อมด้วยกันกับเกมที่มี 3 ส่วนคือ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                   
                    <h6 className="text-xl font-semibold">ส่วนอธิบาย</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      ส่วนนี้จะอธิบายเกียวข้อมูลผลิตภัณฑ์องค์กร ไม่ว่าข้อมูลเครื่องเล่น สถานที่สำคัญขององค์กร 
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">มินิเกมเปิดปิดแผ่นป้าย</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                     มินิเกมที่จะให้คุณได้ทายภาพจากแผ่นป้ายที่ปิดไว้ โดยอาศัยความจำและความสามารถในการคาดเดาของคุณ
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                   
                    <h6 className="text-xl font-semibold">มินิเกมตอบคำถาม</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      มินิเกมที่จะเปิดโอกาศให้คุณได้ตอบคำถาม โดยที่ความท้าทายคือ ทุกครั้งที่ตอบจะสุ่มการเดินซึ่งมีถึง 45 ช่อง
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                มินิเกมเปิดปิดแผ่นป้าย
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                มินิเกมที่จะให้คุณได้ทายภาพจากแผ่นป้ายที่ปิดไว้ โดยอาศัยความจำและความสามารถในการคาดเดาของคุณ
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  วิธีเล่นคือตอบภาพปริศนาที่อยู่หลังจิ๊กซอว์ 25 ช่อง โดยผู้เข้าแข่งขันจะมีสิทธิ์เปิดได้ 1 ช่อง หากตอบถูกจะได้คะแนนเต็ม 25 คะแนน แต่ถ้าหากผู้เข้าแข่งขันไม่แน่ใจในคำตอบ สามารถ เปิดเพิ่ม ได้ครั้งละ 1 ช่อง แต่คะแนนจะลดลงครั้งละ 5 คะแนน หากตอบถูกจะได้คะแนนในขณะนั้น แต่ถ้าหากตอบผิดจะได้ 0 คะแนนทันทีในข้อนั้นทันที
                </p>
                
              </div>

              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://cdn.discordapp.com/attachments/605765871646015527/905614815261773854/map1.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://cdn.discordapp.com/attachments/605765871646015527/905613926337769552/m2.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
               
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                มินิเกมตอบคำถาม
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                มินิเกมที่จะเปิดโอกาศให้คุณได้ตอบคำถาม โดยที่ความท้าทายคือ ทุกครั้งที่ตอบจะสุ่มการเดินซึ่งมีถึง 45 ช่อง
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  กติกาคือ ผู้เล่นจะต้องตอบคำถามที่เจอและเมื่อตอบถูกจะสุ่มเหมมือนทอยลูกเต๋ามากถึง 6 ช่อง เมื่อผู้เล่นถึงจุดเส้นชัยจะบอกคะแนนผู้เล่น และ เกรด ของผู้เล่น
                </p>
               
              </div>
            </div>
          </div>
        </section>
            
            
     

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap  justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-center text-4xl font-semibold text-white">
                  สเปคขั้นต่ำ
                </h2>
                <p className=" text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                OS: Windows 7  <br />
                rocessor: 1.8GHz Dual-Core CPU<br />
                Memory: 4 GB RAM<br />
                Graphics: Integrated graphics<br />
                Storage: 350 MB available space
                </p>
              </div>
            </div>
         
          </div>
        </section>
      
      </main>

      <section className="pb-16 bg-blueGray-200 relative pt-10">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              
              <h3 className="font-semibold text-3xl">
              โหลดเกม
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                โปรแกรมเฉพาะระบบปฏิบัติการ Window
              </p>
              <div className="sm:block flex flex-col mt-10">
              
                <button class="text-white bg-blueGray-700 border-0 py-5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> <i className="fas fa-arrow-alt-circle-down"></i> Download</button>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
    

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
              source code
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                ข้อมูล{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Story of Product Knowledge
                </a>{" "}
               โปรแกรมพัฒนาโดยใช้ Renpy engine โดยใช้ภาษา python ท่านสามารถดูไฟล์ได้ผ่าน Github
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                สามารถติดต่อผู้พัฒนาได้ผ่าน facebook : sarin khoonjun หรือ discord : EveryTime-Aomsin #5195
              </p>
              <a
                href="https://github.com/EverytimeAomsin/The-story-of-nava-knowledge"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                View Github 
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </>
  );
}
