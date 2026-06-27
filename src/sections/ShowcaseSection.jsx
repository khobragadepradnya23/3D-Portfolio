import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const handleMouseMove = (e) => {
    const imageBox = e.currentTarget;
    const rect = imageBox.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    gsap.to(imageBox, {
      rotateX,
      rotateY,
      scale: 1.06,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div
              className="image-wrapper tilt-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src="/images/project1.png" alt="Resumind" />
            </div>

            <div className="text-content">
              <h2>ATS-Friendly Resume Optimization Made Easy with an App called Resumind</h2>
              <p className="text-white-50 md:text-xl">
                A smart resume analysis platform that reviews resumes, identifies improvement areas,
                and provides actionable insights to create stronger job applications.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div
                className="image-wrapper tilt-image bg-[#ffefdb]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src="/images/project2.png" alt="Frontend Design for a Donation Platform" />
              </div>

              <h2>Frontend Design for a Donation Platform</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div
                className="image-wrapper tilt-image bg-[#ffe7db]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src="/images/project3.png" alt="Level Up Your Interview Skills with AI Mock Interviews" />
              </div>

              <h2>Level Up Your Interview Skills with AI Mock Interviews</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;