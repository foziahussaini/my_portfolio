export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1759884247264-86c2aa311632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NzA2MTQwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              With over 5 years of experience in web development, I specialize in creating 
              responsive, user-friendly applications that make a difference. My journey in 
              tech started with a curiosity for how things work, which evolved into a passion 
              for building them.
            </p>
            <p className="text-lg text-gray-700">
              I believe in writing clean, maintainable code and creating intuitive user 
              experiences. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or sharing knowledge with the developer community.
            </p>
            <div className="pt-4">
              <h3 className="text-xl mb-4 text-gray-900">Core Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span>
                  Continuous learning and improvement
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span>
                  User-centered design thinking
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▪</span>
                  Collaboration and knowledge sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
