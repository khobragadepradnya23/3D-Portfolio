import GlowCard from '../components/GlowCard'
import TitleHeader from '../components/TitleHeader.jsx'
import { testimonials } from '../constants/index.js'

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader 
                   title="What People Say About Me?"
                   sub="⭐ Feedback and Testimonials"
                />

                <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                  {testimonials.map(({ imgPath, name, mentions, review }, index) => (
                    <div
                        key={name}
                        className={`lg:col-span-2 ${
                            index === 3 ? "lg:col-start-2" : ""
                        }`}
                    >
                        <GlowCard card={{ review }} index={index}>
                            <div className="flex items-center gap-3">
                                <img src={imgPath} alt={name} className="w-12 h-12 rounded-full object-cover"/>
                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials