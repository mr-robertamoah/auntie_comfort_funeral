'use client'

import { useState } from 'react'

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <div className="container">
      <header className="header">
        <h1>Call To Glory</h1>
        <div className="subtitle">
          <strong>MRS. COMFORT AKUA SERWAA</strong>
        </div>
        <div className="dates">
          Aged 60<br />
          22nd February 1965 - 2025
        </div>
      </header>

      <section className="section">
        <h2>Service Information</h2>
        <p><strong>Funeral Service:</strong> 7th March 2026<br />
        First Bell, Chantan - Accra</p>
        <p><strong>Thanksgiving Service:</strong> 8th March 2026<br />
        Rescue Word Ministry - Chantan</p>
      </section>

      <section className="section">
        <h2>Program Outline</h2>
        <p><strong>Officiating Ministers:</strong></p>
        <p style={{marginLeft: '20px'}}>
          Rev Alex Akudzi, Prophet Samuel Adusei, Rev Nathaniel Commey, Rev Daniel Gyimah, Rev Forgive Gamloanyi
        </p>
        
        <ul className="service-list">
          <li>
            <span className="service-name">Opening Prayer</span>
            <span className="service-person">Rev Nathaniel Commey</span>
          </li>
          <li>
            <span className="service-name">Praises and Worship</span>
            <span className="service-person">Rescue Praise</span>
          </li>
          <li>
            <span className="service-name">First Offering</span>
          </li>
          <li>
            <span className="service-name">Bible Reading</span>
            <span className="service-person">Dis Michael Kissi (Revelation 14:12-14)</span>
          </li>
          <li>
            <span className="service-name">Biography</span>
          </li>
          <li>
            <span className="service-name">Tributes</span>
            <span className="service-person">Husband (Prominent Amoah)</span>
            <span className="service-person">Children (Gifty Amoah)</span>
            <span className="service-person">Church</span>
          </li>
          <li>
            <span className="service-name">Song Ministration</span>
            <span className="service-person">Rescue Praise</span>
          </li>
          <li>
            <span className="service-name">Sermon</span>
            <span className="service-person">Rev Alex Akudzi</span>
          </li>
          <li>
            <span className="service-name">Offering for Family</span>
          </li>
          <li>
            <span className="service-name">Prayer for the Family</span>
            <span className="service-person">Rev Daniel Gyimah</span>
          </li>
          <li>
            <span className="service-name">Announcement</span>
            <span className="service-person">Rev Daniel Gyimah</span>
          </li>
          <li>
            <span className="service-name">Closing Prayer & Benediction</span>
            <span className="service-person">Rev Nathaniel Commey</span>
          </li>
        </ul>

        <h3 style={{marginTop: '30px'}}>Part Two: Burial Service</h3>
        <ul className="service-list">
          <li>
            <span className="service-name">Procession to the Cemetery</span>
          </li>
          <li>
            <span className="service-name">Opening Prayer</span>
            <span className="service-person">Rev Nathaniel Commey</span>
          </li>
          <li>
            <span className="service-name">Song Ministration</span>
            <span className="service-person">When Peace Like a River</span>
          </li>
          <li>
            <span className="service-name">Committal</span>
            <span className="service-person">Rev Alex Akudzi</span>
          </li>
          <li>
            <span className="service-name">M.C.</span>
            <span className="service-person">Madam Jane, Rev Daniel Gyimah</span>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Biography</h2>
        <p>
          Mrs. Comfort Akua Serwaa Amoah was born on 22nd February 1965 at Adansi Dompoasi in the Ashanti Region of Ghana to Opanin Kwaku Agyei and Obaapanin Adwoa Appiaah, both of blessed memory. She was raised in the rich traditions of the Ashanti Kingdom — traditions of respect, resilience, communal love, and deep reverence for family.
        </p>
        <p>
          She began her early education at Adansi Wuruyie D/A Elementary School and continued diligently until she completed Form Four near Adansi Praso. Even in her youthful years, she demonstrated strength of character, humility, and a quiet determination to rise above limitations.
        </p>
        <p>
          With courage and hope for a brighter future, she journeyed from Adansi Dompoasi to Accra — a bold step that marked the beginning of a new chapter in her life. Like many strong women of her generation, she embraced the struggles of city life with perseverance and faith.
        </p>
        <p>
          In Accra, she married Mr. Robert Amoah, and together they built a home grounded in love, discipline, and unity. Though blessed with three biological children, she opened her heart fully to her husband's children and raised them all as one family. To her, there was no distinction — only responsibility, sacrifice, and unconditional love.
        </p>
        <p>
          Her home became a place of refuge and guidance. She was firm yet compassionate, strong yet tender. Through hard work, including managing a provisions and foodstuffs business established for her, she contributed faithfully to the wellbeing of her household. Her life was one of sacrifice — giving her strength, time, and resources for the good of her children.
        </p>
        <p>
          In 2022, she suffered a stroke, entering a difficult season of life. Yet even in illness, she bore her condition with dignity, patience, and quiet faith.
        </p>
        <p>
          Mrs. Comfort Akua Serwaa Amoah's life journey — from the soil of Adansi Dompoasi to the bustling city of Accra — is a story of courage, perseverance, and devotion to family. She leaves behind her husband, children, grandchildren, siblings, and a generation shaped by her love and discipline.
        </p>
        <p>
          <strong>Her legacy is not written in wealth, but in the lives she raised and the values she instilled.</strong>
        </p>
        <p>
          <em>May her noble and gentle soul rest in perfect peace!</em>
        </p>
      </section>

      <section className="section">
        <h2>Photo Gallery</h2>
        
        <div className="gallery-section">
          <h3>In Loving Memory - Mrs. Comfort Akua Serwaa</h3>
          <div className="photo-gallery">
            <img src="/images/deceased/WhatsApp Image 2026-02-25 at 15.56.08.jpeg" alt="Mrs. Comfort Serwaa" onClick={() => setModalImage("/images/deceased/WhatsApp Image 2026-02-25 at 15.56.08.jpeg")} />
            <img src="/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04(3).jpeg" alt="Mrs. Comfort Serwaa" onClick={() => setModalImage("/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04(3).jpeg")} />
            <img src="/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04(1).jpeg" alt="Mrs. Comfort Serwaa" onClick={() => setModalImage("/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04(1).jpeg")} />
            <img src="/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04.jpeg" alt="Mrs. Comfort Serwaa" onClick={() => setModalImage("/images/deceased/WhatsApp Image 2026-02-28 at 16.59.04.jpeg")} />
          </div>
        </div>

        <div className="gallery-section">
          <h3>The Widower - Mr. Robert Amoah</h3>
          <div className="photo-gallery">
            <img src="/images/widower/WhatsApp Image 2026-03-01 at 06.57.43.jpeg" alt="Mr. Robert Amoah" onClick={() => setModalImage("/images/widower/WhatsApp Image 2026-03-01 at 06.57.43.jpeg")} />
            <img src="/images/widower/WhatsApp Image 2026-03-02 at 12.18.49.jpeg" alt="Mr. Robert Amoah" onClick={() => setModalImage("/images/widower/WhatsApp Image 2026-03-02 at 12.18.49.jpeg")} />
          </div>
        </div>

        <div className="gallery-section">
          <h3>The Children</h3>
          <div className="photo-gallery">
            <img src="/images/biological children/WhatsApp Image 2026-02-28 at 10.52.58.jpeg" alt="Children" onClick={() => setModalImage("/images/biological children/WhatsApp Image 2026-02-28 at 10.52.58.jpeg")} />
            <img src="/images/biological children/WhatsApp Image 2026-02-28 at 11.58.17.jpeg" alt="Children" onClick={() => setModalImage("/images/biological children/WhatsApp Image 2026-02-28 at 11.58.17.jpeg")} />
            <img src="/images/biological children/WhatsApp Image 2026-02-28 at 12.32.58.jpeg" alt="Children" onClick={() => setModalImage("/images/biological children/WhatsApp Image 2026-02-28 at 12.32.58.jpeg")} />
            <img src="/images/biological children/WhatsApp Image 2026-03-03 at 18.57.29.jpeg" alt="Children" onClick={() => setModalImage("/images/biological children/WhatsApp Image 2026-03-03 at 18.57.29.jpeg")} />
          </div>
        </div>

        <div className="gallery-section">
          <h3>Family & Loved Ones</h3>
          <div className="photo-gallery">
            <img src="/images/others/WhatsApp Image 2026-02-28 at 16.59.04(2).jpeg" alt="Family" onClick={() => setModalImage("/images/others/WhatsApp Image 2026-02-28 at 16.59.04(2).jpeg")} />
            <img src="/images/others/WhatsApp Image 2026-03-02 at 12.18.50.jpeg" alt="Family" className="rotate-90" onClick={() => setModalImage("/images/others/WhatsApp Image 2026-03-02 at 12.18.50.jpeg")} data-rotated="true" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Tribute by Husband</h2>
        <h3>Mr. Robert Amoah</h3>
        <p>
          About thirty years ago in Accra, I met the woman who would become my wife. She had moved from Dompoase and was working at a printing shop. I used to visit there for business. I did not know that simple meetings would turn into a lifetime journey.
        </p>
        <p>
          When we chose each other, life was already heavy with responsibility. I had seven children. She had one. Yet she did not hesitate. She did not turn away. She chose to stand by me.
        </p>
        <p>
          She accepted my children and loved them as her own. In time, we were blessed with two more children together, making three from her. But her motherhood did not stop there. She cared for many stepchildren and young extended family members from both sides of our family. Her heart was bigger than her circumstances.
        </p>
        <p>
          Together, we raised 20 children and are blessed with 15 grandchildren.
        </p>
        <p>
          We were not the same in character, but we were united in commitment. We decided that no matter what came our way, we would make our marriage work. And for about thirty years, through sacrifice, patience, and compromise, we did.
        </p>
        <p>
          In 2022, she suffered a stroke. It was a painful season. But even in her illness, she carried herself with dignity. She endured quietly. She remained strong in spirit. She fought with grace.
        </p>
        <p>
          Today, the phone keeps ringing. Children, grandchildren, family members call in tears. They ask questions. And sometimes I hold the phone and I am silent, because I do not know what to tell them. I feel lost. The woman who helped me carry this family is no longer here beside me.
        </p>
        <p>
          My dear wife, you stood with me when many would not. You helped me raise children who were not born to you. You gave your strength to this family until the very end.
        </p>
        <p>
          <strong>Comfort me ma wo due.</strong><br />
          You have left me in the middle of a stormy sea.
        </p>
        <p>
          <em>Rest in Perfect Peace!</em>
        </p>
      </section>

      <section className="section">
        <h2>Tribute by Children</h2>
        <p>
          Mummy,
        </p>
        <p>
          It is difficult to stand here and speak about you in the past tense. To us, you were not just a mother to a few — you were a mother to many.
        </p>
        <p>
          You did not only give birth to children; you gave your heart to children. Some of us were not born by you, but you never made us feel different. You loved us the same. You corrected us the same. You prayed for us the same.
        </p>
        <p>
          You welcomed us, guided us, sacrificed for us, and stood by us. Our home was open because your heart was open.
        </p>
        <p>
          Even when you fell ill in 2023, you remained strong for us. You endured with grace and never stopped caring about how we were doing. Your strength taught us courage. Your patience taught us love.
        </p>
        <p>
          Today, we feel the emptiness you have left behind. The one we ran to. The one who held the family together. The one who listened without judging.
        </p>
        <p>
          Mummy, thank you for choosing us.<br />
          Thank you for raising us.<br />
          Thank you for loving us as your own.
        </p>
        <p>
          We promise to hold on to the values you taught us and to stay united as one family.
        </p>
        <p>
          <em>Rest well, Mummy. You will forever live in our hearts.</em>
        </p>
      </section>

      <section className="section">
        <h2>Tribute by Church</h2>
        <h3>Rescue Word Ministry</h3>
        <p>
          It is with mixed feelings that we pay this glowing tribute to our mother and sister, Auntie Comfort Akua Serwaa. How do we begin to say our final words to you, but as believers, we console ourselves with Romans 14:8, which says 'If we live, we live for the Lord; and if we die, we die for the Lord. So, whether we live or die, we belong to the Lord'.
        </p>
        <p>
          Auntie Serwaa's life taught us a valuable lesson in perseverance, even on her sick bed, she kept her faith, reminding us that our connection with God transcends the physical boundaries of a building. Her absence never wavered her commitment to the teachings of Christ. Instead, it only strengthened her to resolve to be a living example of God's love to all she encountered.
        </p>
        <p>
          She was lovable and treated everyone with kindness, compassion, and understanding. Her life spoke volumes about the value of the small, often unnoticed acts of love that can brighten the darkest days of those around us.
        </p>
        <p>
          Maa Serwaa, we wish we could ask the Lord to bring you back to us, but we know that, surely, we will meet again one day.
        </p>
        <p>
          Sleep well. Your memory will forever inspire us to cherish the moments we shared and to extend love to all no matter the circumstances that surrounds us.
        </p>
        <p>
          <em>Auntie Serwaa, may your gentle soul find rest with the Lord.</em><br />
          <strong>Auntie Serwaa, Damirifa Due!</strong>
        </p>
      </section>

      <section className="section">
        <h2>Chief Mourners & Family</h2>
        <div className="mourners">
          <strong>Chief Mourners:</strong>
          <p>
            Nana Adade Frimpong (Akomhene Adansi Patakro), Aduana Abusuapani Acheampong (Adansi Patakro), Opanin Kofi Tweneboah (Adansi Patakro), Opanin Samuel Adu Gyamfi (Obuasi Adansi), Obaapanin Maame Afia Akyaa, Obaapanin Adwoa Kwankyewaa all at Adansi Patakro, Obaapanin Yaa Ataa (Dompoase Adansi), Asona Abusuapani Kwame Atta, Obaapanin Ama Ataa all at Adansi Akwanserem, Opanin Kwabena Amoako (Adansi Ayokoa), Madam Veronica Amoako, Madam Agnes Amoako, Madam Cecilia Amoako all at Obuasi Adansi.
          </p>

          <strong>Brothers and Sisters:</strong>
          <p>
            Elizabeth Kyei aka Ante Ama, Augustine Mensah Accra, Kwabena Abu (Kumasi), Akosua Obenewaa, Yaa Bona aka Yaa Barikisu, Nana Abankro (Adansi Dompoase), Grace Agyei (Accra), Nana Ofori, Kwaku Anthony, Cecilia Akyaa Ofori aka sister Mercy, Hannah Ofori, Lawrencia Aboagye aka Maame Dufie (Kumasi).
          </p>

          <strong>Children:</strong>
          <p>
            Prominent Amoah, Castro Amoah, Benjamin Amoah, Theresa Oduro, Constance Tawiah, Emmanuel Amoah, Joyce Amoah, Kwaku Anane, Bernard Nkrumah, Stephen Agyei, Robert Amoah, Ernest Obeng Amoah, Gifty Obenewaa Amoah, Akosua Akyaa, Kwadwo Michael, Hagar Mensah, Collins Mensah, Yaa Bona, Grace Agyei, Daniel Agyei.
          </p>

          <strong>Widower:</strong>
          <p>Mr. Robert Amoah</p>

          <strong>Grandchildren:</strong>
          <p>15 Grandchildren</p>
        </div>
      </section>

      <footer className="footer">
        <p>Thank You!</p>
        <p>
          The entire family, widower and the children wish to express their sincere thanks to all those who sympathized with them during the burial and celebration of their beloved Mrs. Comfort Akua Serwaa.
        </p>
        <p><strong>God Bless You!</strong></p>
      </footer>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setModalImage(null)}>&times;</span>
            <img 
              src={modalImage} 
              alt="Full size" 
              className={modalImage.includes('2026-03-02 at 12.18.50') ? 'rotate-90' : ''}
            />
          </div>
        </div>
      )}
    </div>
  )
}
