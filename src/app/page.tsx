'use client'
import { useRef } from "react"
import { gsap }	from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export default function Home() {
	// const sectionHero = useRef(null)
	// const section2 = useRef(null)
	// const section3 = useRef(null)
	// const section4 = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useGSAP({

		// ScrollTrigger.create({})

	},[])

	return (
		<div className="relative items-center justify-items-center min-h-screen pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col justify-start items-start sm:items-start w-full">
				<section className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F230]">
					<h1 className="text-5xl font-bold">Sección 1</h1>
					<p className="text-xl">Este es el título de la sección</p>
					<div className="flex justify-center items-center">
						<span>
							+
						</span>
					</div>
				</section>
				<section className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F240]">
					<h1 className="text-5xl font-bold">Sección 2</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>
				<section className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F230]">
					<h1 className="text-5xl font-bold">Sección 3</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>	
				<section className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F240]">
					<h1 className="text-5xl font-bold">Sección 4</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>
				
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center ">			
				<h2>Este es el título del footer</h2>
			</footer>
		</div>
	);
}
