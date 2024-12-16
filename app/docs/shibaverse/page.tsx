import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Palette, ShoppingBag, Share2 } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import Image from "next/image"
import { MobileSidebar } from "@/components/sidebar-nav"

export default function ShibaVersePage() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="ShibaVerse" 
        description="Explore the immersive metaverse world of SunnyShiba"
      />

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Welcome to ShibaVerse</h3>
              <p className="mt-2 text-muted-foreground">
                ShibaVerse is our innovative metaverse platform where the SUNSHIBA community comes together to play, trade, and interact in a vibrant virtual world. Experience the future of social connectivity in the crypto space.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1614832076299-7b88aa7b9b0b?w=800&q=80"
                alt="Virtual world visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Play-to-Earn Games"
          description="Engage in exciting games and earn SUNSHIBA tokens while having fun."
          icon={Gamepad2}
        />
        <FeatureCard
          title="NFT Marketplace"
          description="Create, buy, and sell unique SunnyShiba-themed NFTs in our marketplace."
          icon={Palette}
        />
        <FeatureCard
          title="Virtual Economy"
          description="Trade virtual assets and participate in the ShibaVerse economy."
          icon={ShoppingBag}
        />
        <FeatureCard
          title="Social Features"
          description="Connect with other community members in our virtual social spaces."
          icon={Share2}
        />
      </div>
    </div>
  )
}