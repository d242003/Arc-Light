export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  dashboard: (props: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.33334 1.33337H6.33334V8.00004H1.33334V1.33337Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.33334 11.3334H6.33334V14.6667H1.33334V11.3334Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.66668 8.00004H14.6667V14.6667H9.66668V8.00004Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.66668 1.33337H14.6667V4.66671H9.66668V1.33337Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  myLanguages: (props: IconProps) => (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.25001 2.41663L12.5833 5.74996M11.3333 12H14.6667M4.66668 13.6669L13.4167 4.91688C13.6355 4.69801 13.8092 4.43817 13.9276 4.1522C14.0461 3.86624 14.107 3.55974 14.107 3.25021C14.107 2.94068 14.0461 2.63418 13.9276 2.34822C13.8092 2.06225 13.6355 1.80241 13.4167 1.58354C13.1978 1.36467 12.938 1.19106 12.652 1.07261C12.366 0.954155 12.0595 0.893188 11.75 0.893188C11.4405 0.893188 11.134 0.954155 10.848 1.07261C10.562 1.19106 10.3022 1.36467 10.0833 1.58354L1.33334 10.3335V13.6669H4.66668Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  lessons: (props: IconProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.66668 1.33337V14.6667M11.3333 1.33337V14.6667M1.33334 4.66671H4.66668M1.33334 11.3334H4.66668M1.33334 8.00004H14.6667M11.3333 4.66671H14.6667M11.3333 11.3334H14.6667M1.33334 3.00004C1.33334 2.55801 1.50894 2.13409 1.8215 1.82153C2.13406 1.50897 2.55798 1.33337 3.00001 1.33337H13C13.442 1.33337 13.866 1.50897 14.1785 1.82153C14.4911 2.13409 14.6667 2.55801 14.6667 3.00004V13C14.6667 13.4421 14.4911 13.866 14.1785 14.1786C13.866 14.4911 13.442 14.6667 13 14.6667H3.00001C2.55798 14.6667 2.13406 14.4911 1.8215 14.1786C1.50894 13.866 1.33334 13.4421 1.33334 13V3.00004Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  modules: (props: IconProps) => (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.66666 1.5V4.83333C8.66666 5.05435 8.75445 5.26631 8.91073 5.42259C9.06701 5.57887 9.27898 5.66667 9.49999 5.66667H12.8333M8.66666 1.5H2.83332C2.3913 1.5 1.96737 1.67559 1.65481 1.98816C1.34225 2.30072 1.16666 2.72464 1.16666 3.16667V14.8333C1.16666 15.2754 1.34225 15.6993 1.65481 16.0118C1.96737 16.3244 2.3913 16.5 2.83332 16.5H11.1667C11.6087 16.5 12.0326 16.3244 12.3452 16.0118C12.6577 15.6993 12.8333 15.2754 12.8333 14.8333V5.66667M8.66666 1.5L12.8333 5.66667M4.49999 6.5H5.33332M4.49999 9.83333H9.49999M4.49999 13.1667H9.49999"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  miniGames: (props: IconProps) => (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.33333 6C7.33333 6.44203 7.50893 6.86595 7.82149 7.17851C8.13405 7.49107 8.55797 7.66667 9 7.66667C9.44203 7.66667 9.86595 7.49107 10.1785 7.17851C10.4911 6.86595 10.6667 6.44203 10.6667 6C10.6667 5.55797 10.4911 5.13405 10.1785 4.82149C9.86595 4.50893 9.44203 4.33333 9 4.33333C8.55797 4.33333 8.13405 4.50893 7.82149 4.82149C7.50893 5.13405 7.33333 5.55797 7.33333 6Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 6C14.5 9.33333 12 11 9 11C6 11 3.5 9.33333 1.5 6C3.5 2.66667 6 1 9 1C12 1 14.5 2.66667 16.5 6Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  quizzes: (props: IconProps) => (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.83332 11.3333C3.27535 11.3333 3.69927 11.5088 4.01183 11.8214C4.32439 12.134 4.49999 12.5579 4.49999 12.9999C4.49999 13.4419 4.32439 13.8659 4.01183 14.1784C3.69927 14.491 3.27535 14.6666 2.83332 14.6666C2.3913 14.6666 1.96737 14.491 1.65481 14.1784C1.34225 13.8659 1.16666 13.4419 1.16666 12.9999C1.16666 12.5579 1.34225 12.134 1.65481 11.8214C1.96737 11.5088 2.3913 11.3333 2.83332 11.3333ZM2.83332 11.3333V4.66659M2.83332 4.66659C2.3913 4.66659 1.96737 4.49099 1.65481 4.17843C1.34225 3.86587 1.16666 3.44195 1.16666 2.99992C1.16666 2.55789 1.34225 2.13397 1.65481 1.82141C1.96737 1.50885 2.3913 1.33325 2.83332 1.33325C3.27535 1.33325 3.69927 1.50885 4.01183 1.82141C4.32439 2.13397 4.49999 2.55789 4.49999 2.99992C4.49999 3.44195 4.32439 3.86587 4.01183 4.17843C3.69927 4.49099 3.27535 4.66659 2.83332 4.66659ZM2.83332 4.66659C2.83332 5.55064 3.18451 6.39849 3.80963 7.02361C4.43475 7.64873 5.2826 7.99992 6.16666 7.99992H9.49999M9.49999 7.99992C9.49999 8.44195 9.67558 8.86587 9.98815 9.17843C10.3007 9.49099 10.7246 9.66659 11.1667 9.66659C11.6087 9.66659 12.0326 9.49099 12.3452 9.17843C12.6577 8.86587 12.8333 8.44195 12.8333 7.99992C12.8333 7.55789 12.6577 7.13397 12.3452 6.82141C12.0326 6.50885 11.6087 6.33325 11.1667 6.33325C10.7246 6.33325 10.3007 6.50885 9.98815 6.82141C9.67558 7.13397 9.49999 7.55789 9.49999 7.99992Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  learnMore: (props: IconProps) => (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 12.834C7.85986 12.1757 6.56652 11.8292 5.25 11.8292C3.93347 11.8292 2.64014 12.1757 1.5 12.834V2.00066C2.64014 1.3424 3.93347 0.99585 5.25 0.99585C6.56652 0.99585 7.85986 1.3424 9 2.00066M9 12.834C10.1401 12.1757 11.4335 11.8292 12.75 11.8292C14.0665 11.8292 15.3599 12.1757 16.5 12.834V2.00066C15.3599 1.3424 14.0665 0.99585 12.75 0.99585C11.4335 0.99585 10.1401 1.3424 9 2.00066M9 12.834V2.00066"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  contactUs: (props: IconProps) => (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 14.6664L2.58333 11.4164C0.646667 8.55227 1.395 4.85644 4.33333 2.77144C7.27167 0.687268 11.4917 0.858102 14.2042 3.17144C16.9167 5.4856 17.2833 9.22644 15.0617 11.9223C12.84 14.6181 8.71583 15.4348 5.41667 13.8331L1.5 14.6664Z"
        stroke="#0B0C14"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};