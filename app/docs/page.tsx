import { MobileSidebar } from "@/components/sidebar-nav";

export default function DocsPage() {
  return (
    <div className="space-y-6 ">
      <MobileSidebar />
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to SunnyShiba, the cheerful Shiba Inu coin bringing warmth and positivity to the crypto world! 🌞🐕
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is SunnyShiba?</h2>
        <p className="leading-7">
          SunnyShiba (SUNSHIBA) is a vibrant and visionary meme cryptocurrency designed to bring joy, positivity, and financial opportunity to its holders. Inspired by the warmth of the sun and the playful charm of Shiba Inu dogs, we&lsquo;re creating more than just a token—we&lsquo;re building a movement for optimistic and community-driven crypto enthusiasts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Community-Driven Governance</li>
          <li>Sunny Rewards Program</li>
          <li>Bright Future Fund</li>
          <li>ShibaVerse Metaverse</li>
          <li>Deflationary Tokenomics</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Join Our Community</h2>
        <p className="leading-7">
          Be part of the sunniest community in crypto! Connect with fellow SUNSHIBA holders and stay updated on our latest developments through our social channels.
        </p>
        <div className="flex space-x-4">
          <a href="https://twitter.com/sunnyshiba" className="text-primary hover:underline">Twitter</a>
          <a href="https://t.me/sunnyshibacommunity" className="text-primary hover:underline">Telegram</a>
          <a href="https://discord.gg/sunnyshiba" className="text-primary hover:underline">Discord</a>
        </div>
      </div>
    </div>
  )
}