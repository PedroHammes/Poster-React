import Poster from "./components/Poster"

export default function App() {
  return (
    <>
      <main>
        <Poster 
          imgSrc="https://i.pinimg.com/564x/01/9e/7b/019e7b244d4cd272ac1618a717969217.jpg"
          imgAlt="Jujutsu Kaisen - Season 1" 
          title="Jujutsu Kaisen - Season 1" 
          description="Yuji Itadori, is a high school student, attached to his grandfather who is about to pass away and a member of the school's occult club. his life is turned upside down when he meets Megumi Fushiguro and embarks on a mission to save his friends from a talisman that guards a great demon, Ryomen Sukuna." 
        />

        <Poster 
          imgSrc="https://i.pinimg.com/564x/b6/28/a0/b628a0052a0688ae9ba99e2f12e8f1ef.jpg"
          imgAlt="Jujutsu Kaisen - Season 2" 
          title="Jujutsu Kaisen - Season 2" 
          description="The revelation in season two expands the scope of this curse, revealing that Tsumiki is not the only victim in the country. Pseudo-Geto reveals that he has marked two types of non-sorcerers. People like Yuji are fed cursed objects, while others, like Junpei, have cursed techniques in their brains." 
        />

        <Poster 
          imgSrc="https://i.pinimg.com/564x/fd/37/cd/fd37cdadeea6cf97ca6acec593fcff2b.jpg"
          imgAlt="Jujutsu Kaisen 0" 
          title="Jujutsu Kaisen 0" 
          description="Young Yuta Okkotsu gains control of an extremely powerful spirit, so a group of sorcerers enroll him at Tokyo Prefectural Jujutsu High School, to help him control this power and also to keep an eye on him." 
        />
 
      </main>
    </>
  )
}