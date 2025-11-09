import { cn } from "@site/src/utils";

const rows = [
  {
    row: [
      {
        label: 'TypeScript',
        src: "/img/tech-svgs/typescript.svg",
        className: '[animation-delay:-6s] [animation-duration:30s]',
      },
      {
        label: 'React',
        src: "/img/tech-svgs/react.svg",
        className: '[animation-delay:-12s] [animation-duration:30s]',
      },
      {
        label: 'Tailwind CSS',
        src: "/img/tech-svgs/tailwind.svg",
        className: '[animation-delay:-18s] [animation-duration:30s]',
      },
      {
        label: 'Vite',
        src: "/img/tech-svgs/vite.svg",
        className: '[animation-delay:-24s] [animation-duration:30s]',
      },
      {
        label: 'Flutter',
        src: "/img/tech-svgs/flutter.svg",
        className: '[animation-delay:-30s] [animation-duration:30s]',
      },
    ],
  },
  {
    row: [
      {
        label: 'Java',
        src: "/img/tech-svgs/java.svg",
        className: '[animation-delay:-10s] [animation-duration:40s]',
      },
      {
        label: 'Spring Boot',
        src: "/img/tech-svgs/spring.svg",
        className: '[animation-delay:-20s] [animation-duration:40s]',
      },
      {
        label: 'Docker',
        src: "/img/tech-svgs/docker.svg",
        className: '[animation-delay:-30s] [animation-duration:40s]',
      },
      {
        label: 'SQLServer',
        src: "/img/tech-svgs/sqlserver.svg",
        className: '[animation-delay:-40s] [animation-duration:40s]',
      },
    ],
  },
  {
    row: [
      {
        label: 'AWS',
        src: "/img/tech-svgs/aws.svg",
        className: '[animation-delay:-10s] [animation-duration:30s]',
      },
      {
        label: 'Amplify',
        src: "/img/tech-svgs/amplify.svg",
        className: '[animation-delay:-20s] [animation-duration:30s]',
      },
      {
        label: 'Kubernetes',
        src: "/img/tech-svgs/k8s.svg",
        className: '[animation-delay:-30s] [animation-duration:30s]',
      }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="dark h-[600px]" id="features">
      <div
        aria-hidden="true"
        className="relative h-full overflow-hidden bg-background py-24 ring-inset sm:py-32"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] text-center">
          <div className="relative z-20">
            <p className="opacity-20 text-secondary mx-auto mt-2 max-w-3xl text-pretty text-5xl text-foreground/10 tracking-tight">
              Desarrollado con las <span className="text-primary font-semibold"> mejores tecnologías</span>
            </p>
          </div>
        </div>
        <div className="absolute z-1 inset-0 grid grid-cols-1 pt-0 [container-type:inline-size]">
          {rows.map((rowData, index) => (
            <div className="group relative" key={index}>
              {rowData.row.map((logo, _logoIndex) => (
                <img
                  key={logo.label}
                  alt={logo.label}
                  src={logo.src}
                  className={cn(
                    logo.className,
                    'size-18 absolute top-[50px]',
                    '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:running] [animation-timing-function:linear]',
                  )} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
