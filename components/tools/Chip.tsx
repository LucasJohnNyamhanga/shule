import Styles from '../../styles/Chip.module.scss'
import { type } from 'os';
import Link from 'next/link'

type dataType = {
  label: string,
  headerText: string,
  link:string
}

export default function ClickableChips({label, headerText, link}:dataType) {

  return (
    <div>
      <Link passHref  href={`${link}/${label.replace(/ +/g, "")}`}>
        <a>
          <div className={Styles.chipStyle}>
            <div>{label}</div>
          </div>
        </a>
      </Link>
    </div>
    
  );
}