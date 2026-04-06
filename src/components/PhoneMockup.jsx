export default function PhoneMockup({ src, alt }) {
  return (
    <div className="flex items-center justify-center w-full h-full py-8">
      <div className="relative" style={{ width: "200px" }}>
        <svg
          viewBox="0 0 400 780"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <defs>
            <clipPath id="screenClip">
              <rect x="30" y="60" width="340" height="660" rx="8" />
            </clipPath>
          </defs>
          <rect x="10" y="10" width="380" height="760" rx="44" fill="#1a1a1a" />
          <rect x="2" y="180" width="6" height="50" rx="3" fill="#2a2a2a" />
          <rect x="2" y="240" width="6" height="80" rx="3" fill="#2a2a2a" />
          <rect x="2" y="330" width="6" height="80" rx="3" fill="#2a2a2a" />
          <rect x="392" y="220" width="6" height="100" rx="3" fill="#2a2a2a" />
          <rect x="20" y="20" width="360" height="740" rx="38" fill="#0d0d0d" />
          <image
            href={src}
            x="20"
            y="55"
            width="360"
            height="680"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#screenClip)"
          />
          <rect x="145" y="28" width="110" height="26" rx="13" fill="#1a1a1a" />
          <rect x="155" y="740" width="90" height="5" rx="2.5" fill="#444" />
          <rect
            x="10"
            y="10"
            width="380"
            height="760"
            rx="44"
            fill="none"
            stroke="#333"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
