import { SectionTitle } from '@/shared/ui'
import { WhatsAppIcon, TelegramIcon, GmailIcon, PhoneIcon } from '@/assets/icons/icons'
import './contacts.css'

const LINKS = [
  {
    href: 'mailto:luijulus@gmail.com',
    icon: <GmailIcon width={32} height={32}/>,
    text: 'luijulus@gmail.com',
  },
  {
    href: 'https://wa.me/9962211585856',
    icon: <WhatsAppIcon width={32} height={32}/>,
    text: '+996 (221) 158-5856',
  },
  {
    href: 'https://t.me/JulustaanL',
    icon: <TelegramIcon width={32} height={32}/>,
    text: '@JulustaanL',
  },
  {
    href: 'tel:+77053060465',
    icon: <PhoneIcon width={32} height={32}/>,
    text: '+7 (705) 306-0465',
  },
];

export const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className='container'>
            <div className="contacts__wrapper">
                <SectionTitle highlightedText="Контакты" titleText="для связи" />
                <div className="contacts__links">
                    {
                        LINKS.map((link) => (
                            <a key={link.text} href={link.href} className="contacts__link" target="_blank" rel="noreferrer">
                                <div className="contacts__icon">{link.icon}</div>
                                <span className="contacts__text">{link.text}</span>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
        </section>
    )
}
