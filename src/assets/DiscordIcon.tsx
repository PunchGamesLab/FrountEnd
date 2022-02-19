import * as React from 'react'

const Icon = ({ height = '24px', width = '24px', color = 'black', ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 39 31" {...props}>
    <path
      d="M33.0152 3.10092C30.5295 1.9604 27.864 1.12007 25.0769 0.638738C25.0262 0.629445 24.9754 0.652678 24.9493 0.699066C24.6065 1.30882 24.2268 2.10421 23.9608 2.72943C20.9632 2.28062 17.981 2.28062 15.0448 2.72943C14.7788 2.09035 14.3853 1.30882 14.041 0.699066C14.0148 0.654201 13.9641 0.630969 13.9134 0.638738C11.1279 1.11847 8.46237 1.9588 5.97506 3.10092C5.9535 3.11021 5.93507 3.12567 5.9228 3.14578C0.866817 10.6994 -0.518292 18.0673 0.161161 25.3439C0.164208 25.3794 0.184241 25.4135 0.211891 25.4351C3.54769 27.8849 6.77905 29.3721 9.95031 30.3579C10.001 30.3733 10.0548 30.3548 10.0871 30.313C10.8373 29.2886 11.506 28.2084 12.0793 27.0724C12.1131 27.0059 12.0808 26.927 12.0117 26.9007C10.951 26.4983 9.94102 26.0077 8.96945 25.4507C8.89259 25.4058 8.88642 25.2959 8.95718 25.2432C9.16163 25.0901 9.36615 24.9306 9.56138 24.7697C9.59672 24.7403 9.64593 24.7341 9.68744 24.7526C16.07 27.6667 22.98 27.6667 29.2872 24.7526C29.3287 24.7325 29.378 24.7388 29.4148 24.7681C29.6101 24.929 29.8146 25.09 30.0205 25.2432C30.0912 25.2958 30.0866 25.4057 30.0098 25.4506C29.0382 26.0185 28.0283 26.4983 26.966 26.8991C26.8969 26.9253 26.8661 27.0059 26.9 27.0724C27.4857 28.2067 28.1544 29.2869 28.8907 30.3114C28.9215 30.3548 28.9768 30.3733 29.0275 30.3578C32.2141 29.3721 35.4455 27.8848 38.7813 25.435C38.8105 25.4134 38.829 25.3809 38.832 25.3453C39.6452 16.9328 37.47 9.62527 33.0658 3.14723C33.0551 3.12567 33.0367 3.11021 33.0152 3.10092ZM13.0326 20.9132C11.111 20.9132 9.52764 19.149 9.52764 16.9824C9.52764 14.8158 11.0802 13.0516 13.0326 13.0516C15.0002 13.0516 16.5683 14.8313 16.5375 16.9824C16.5375 19.149 14.9848 20.9132 13.0326 20.9132ZM25.9915 20.9132C24.07 20.9132 22.4866 19.149 22.4866 16.9824C22.4866 14.8158 24.0392 13.0516 25.9915 13.0516C27.9592 13.0516 29.5272 14.8313 29.4965 16.9824C29.4965 19.149 27.9592 20.9132 25.9915 20.9132Z"
      fill="white"
    />
  </svg>
)

export default Icon