import clsx from 'clsx';

import * as styles from './counter-note.css';

interface CounterNoteProps {
  index: 1 | 2 | 3 | 4 | 5;
  label: string;
  width: number;
  color?: string;
  animationDelay?: number;
}

const D_MAP = {
  1: 'M20.6505 10.9611C20.6505 11.9045 20.5158 12.9677 20.2462 14.1507C19.9767 15.3187 19.7221 16.3594 19.4825 17.2728C19.2429 18.1862 19.0258 19.0697 18.8311 19.9232C18.6515 20.7768 18.4942 21.4731 18.3595 22.0121C18.2397 22.5362 18.0974 23.0753 17.9327 23.6294C17.6033 24.6925 17.2439 25.2241 16.8545 25.2241C16.5101 25.2241 16.1133 25.007 15.6641 24.5727C15.2298 24.1235 15.0127 23.7192 15.0127 23.3598C15.0127 23.0004 15.1774 22.1769 15.5069 20.8891C15.8363 19.6013 16.1657 17.9167 16.4952 15.8353C16.8396 13.7389 17.0118 11.5601 17.0118 9.29901C17.0118 8.86475 17.2289 8.64763 17.6632 8.64763C18.1124 8.64763 18.7188 8.96208 19.4825 9.591C20.2612 10.2199 20.6505 10.6766 20.6505 10.9611Z',
  2: 'M14.7984 22.0043C17.4788 21.5102 19.5078 21.2631 20.8854 21.2631C22.2781 21.2631 22.9744 21.5626 22.9744 22.1616C22.9744 22.7306 21.7839 23.3445 19.403 24.0034C17.0371 24.6623 15.2177 24.9917 13.9449 24.9917C13.4208 24.9917 12.7844 24.6548 12.0357 23.9809C11.287 23.3071 10.9126 22.7081 10.9126 22.184C10.9126 21.8396 11.871 20.8813 13.7877 19.309C14.5813 18.6501 15.3749 17.9613 16.1686 17.2425C16.9622 16.5088 17.636 15.7601 18.1901 14.9964C18.7591 14.2327 19.0436 13.5514 19.0436 12.9524C19.0436 12.3385 18.7591 12.0315 18.1901 12.0315C17.7558 12.0315 17.3665 12.1962 17.0221 12.5256C16.6927 12.8401 16.4306 13.162 16.2359 13.4915C16.0563 13.8059 15.9215 13.9632 15.8316 13.9632C15.4423 13.9632 14.9482 13.7535 14.3492 13.3342C13.7652 12.9 13.4732 12.5256 13.4732 12.2112C13.4732 11.3576 13.9224 10.549 14.8209 9.78535C15.7343 9.00669 16.8274 8.61735 18.1002 8.61735C19.388 8.61735 20.3988 9.01417 21.1325 9.80781C21.8663 10.5865 22.2331 11.5823 22.2331 12.7952C22.2331 14.4274 21.5293 16.067 20.1218 17.7142C18.7292 19.3614 16.9547 20.7914 14.7984 22.0043Z',
  3: 'M14.1695 17.1104V17.0206C14.1695 16.8409 14.2519 16.6912 14.4166 16.5714C14.6112 16.3318 14.9931 16.0023 15.5621 15.5831C16.1311 15.1638 16.6627 14.7745 17.1569 14.4151C17.666 14.0407 18.1227 13.599 18.527 13.0899C18.9313 12.5807 19.1335 12.0866 19.1335 11.6074C19.1335 11.4277 19.0661 11.3379 18.9313 11.3379C18.4372 11.3379 17.7334 11.5849 16.8199 12.0791C15.9065 12.5583 15.3225 12.7979 15.068 12.7979C14.8134 12.7979 14.4091 12.5358 13.855 12.0117C13.301 11.4726 13.024 11.0758 13.024 10.8213C13.024 10.402 13.3759 9.99768 14.0797 9.60835C14.7834 9.20404 15.5846 8.89707 16.483 8.68743C17.3964 8.46282 18.1976 8.35051 18.8864 8.35051C19.8747 8.35051 20.7282 8.70989 21.447 9.42866C22.1807 10.1474 22.5476 10.9036 22.5476 11.6973C22.5476 12.4909 22.2107 13.3145 21.5368 14.168C20.878 15.0066 20.0544 15.7628 19.0661 16.4366C21.1625 16.9008 22.2107 17.8517 22.2107 19.2892C22.2107 20.2026 21.6791 21.1011 20.6159 21.9846C19.5677 22.8531 18.2949 23.5419 16.7975 24.051C15.3001 24.5601 13.885 24.8147 12.5523 24.8147C10.9351 24.8147 10.1265 24.4628 10.1265 23.759C10.1265 23.3697 11.4741 22.7782 14.1695 21.9846C15.1728 21.7 16.0937 21.3107 16.9322 20.8166C17.7858 20.3224 18.2125 19.8133 18.2125 19.2892C18.2125 19.0047 18.0628 18.7876 17.7633 18.6378C17.4638 18.4731 17.1269 18.3683 16.7526 18.3234C15.6145 18.1886 14.8733 17.9864 14.5289 17.7169C14.2893 17.5672 14.1695 17.365 14.1695 17.1104Z',
  4: 'M20.1218 12.0789C20.4961 12.0789 20.9978 12.3559 21.6267 12.9099C22.2706 13.464 22.5925 13.9207 22.5925 14.2801C22.5925 15.1486 22.0609 17.2375 20.9978 20.5468C19.9346 23.8411 19.1335 25.4883 18.5944 25.4883C18.3099 25.4883 17.9879 25.2786 17.6285 24.8594C17.2841 24.4251 17.1119 24.0582 17.1119 23.7588C17.1119 23.4593 17.1494 23.1448 17.2242 22.8154C17.2991 22.471 17.374 22.1565 17.4489 21.872C17.5387 21.5725 17.666 21.1532 17.8307 20.6142C18.0104 20.0751 18.1526 19.6408 18.2575 19.3114C17.1793 19.6858 16.1162 19.8729 15.068 19.8729C14.0347 19.8729 13.2261 19.5884 12.6421 19.0194C12.0731 18.4504 11.7886 17.6867 11.7886 16.7284C11.7886 16.0395 12.1555 14.9913 12.8892 13.5838C13.6379 12.1762 14.4615 10.9109 15.36 9.78779C16.2584 8.66472 16.8948 8.10319 17.2692 8.10319C17.6585 8.10319 18.0553 8.29037 18.4596 8.66473C18.8789 9.03908 19.0885 9.39098 19.0885 9.72041C19.0885 10.0349 18.3847 11.1879 16.9772 13.1795C15.5846 15.171 14.8883 16.3465 14.8883 16.7059C14.8883 16.8556 14.9182 16.953 14.9781 16.9979C15.038 17.0428 15.1728 17.0653 15.3824 17.0653C15.8915 17.0653 16.6253 16.8631 17.5836 16.4588C18.542 16.0545 19.0586 15.8449 19.1335 15.8299C19.3281 14.7667 19.4255 13.741 19.4255 12.7527C19.4255 12.3035 19.6576 12.0789 20.1218 12.0789Z',
  5: 'M19.5602 8.48552C22.3005 8.48552 23.6707 8.81496 23.6707 9.47382C23.6707 9.75833 23.4386 10.0054 22.9744 10.215C22.4203 10.4846 21.7465 10.7092 20.9528 10.8889C20.1742 11.0686 19.5453 11.2108 19.0661 11.3157C18.6019 11.4205 18.235 11.5103 17.9655 11.5852C17.6959 11.6451 17.4264 11.9521 17.1569 12.5061C16.9023 13.0602 16.775 13.4944 16.775 13.8089C16.775 14.1233 16.9173 14.4528 17.2018 14.7972C17.5013 15.1416 17.8607 15.4785 18.2799 15.8079C18.6992 16.1374 19.1185 16.4818 19.5378 16.8412C20.541 17.6947 21.0427 18.5632 21.0427 19.4467C21.0427 20.8093 20.3688 22.0597 19.0212 23.1977C17.6884 24.3208 16.3782 24.8823 15.0904 24.8823C13.8026 24.8823 12.702 24.5379 11.7886 23.8491C10.8901 23.1453 10.4409 22.3517 10.4409 21.4682C10.4409 21.1837 10.4933 20.9366 10.5981 20.727C10.703 20.5173 10.8452 20.4125 11.0249 20.4125C11.2046 20.4125 11.4367 20.5473 11.7212 20.8168C12.6047 21.6554 13.3908 22.0746 14.0797 22.0746C14.7685 22.0746 15.5097 21.7901 16.3033 21.2211C17.1119 20.6521 17.5162 20.0831 17.5162 19.5141C17.5162 19.0049 17.0146 18.4134 16.0113 17.7396C15.5921 17.4551 15.1728 17.1481 14.7535 16.8187C14.3492 16.4893 13.9973 16.07 13.6978 15.5609C13.4133 15.0517 13.271 14.4378 13.271 13.719C13.271 13.0003 13.6304 12.0045 14.3492 10.7317C15.068 9.44387 15.7268 8.74757 16.3258 8.64275C16.9248 8.53793 18.0029 8.48552 19.5602 8.48552Z',
};

export const CounterNote = ({
  index,
  label,
  width,
  color = 'currentColor',
  animationDelay = 200,
}: CounterNoteProps) => {
  return (
    <div style={{ width }} className={styles.counterNote}>
      <div className={styles.count}>
        <svg
          width="35"
          height="37"
          viewBox="0 0 35 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ animationDelay: `${animationDelay}ms` }}
            className={styles.fadeInAnim}
            d={D_MAP[index] ?? ''}
            fill={color}
          />
          <path
            style={{ animationDelay: `${animationDelay + 200}ms` }}
            className={styles.circleAnim}
            d="M21.0208 1.61363C17.955 1.61363 14.645 1.19536 11.7113 2.19547C9.48766 2.95353 7.67386 4.69528 6.11662 6.39627C4.27176 8.41142 2.88097 11.0381 2.31225 13.7237C2.03 15.0565 2.03092 16.435 2.03092 17.7902C2.03092 19.3224 1.93456 20.8926 2.08207 22.4194C2.46462 26.3788 5.22971 29.7171 8.38646 31.9079C10.6706 33.4932 13.3724 34.3043 16.0975 34.6957C18.2128 34.9995 20.6588 35.4449 22.7472 34.7276C24.0477 34.281 25.4641 33.2759 26.5196 32.4067C27.7642 31.3816 28.8421 30.0236 29.6526 28.6343C31.2273 25.9348 32.0282 22.577 32.5043 19.5166C32.9289 16.7864 32.9403 13.9927 32.8687 11.2364C32.8081 8.90408 32.3903 5.74734 30.4326 4.14561C28.1828 2.30487 25.5133 2.76453 22.8623 2.76453"
            stroke={color}
            strokeWidth="2.99485"
            strokeLinecap="round"
            strokeDasharray="120 120"
          />
        </svg>
      </div>

      <div
        className={clsx(styles.label, styles.fadeInAnim)}
        style={{ color, animationDelay: `${animationDelay + 700}ms` }}
      >
        {label}
      </div>
    </div>
  );
};
