import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="You own store of Nifty NFTS.
        Start Selling & Growing"
        description="Buy, Store, collect NFT,
        exchange & earn crypto. Join 25+ million people using UP Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper 
        title="Smart User Marketplace"
        description="let enjoy it"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features/>

      <SectionWrapper 
        title="Deployment"
        description="We have 3 main components of the development"
        showBtn
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper 
        title="Showcase"
        description="This contains two sections. One is the image section and 
        the other is the details section"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center
      bg-primary flex-col text-center banner04">
        <p className={`${styles.pText}
        ${styles.whiteText}`}>Made by {" "}
        <span className="bold">Martin</span>
        </p>
      </div>
    </>
  );
}

export default App;
