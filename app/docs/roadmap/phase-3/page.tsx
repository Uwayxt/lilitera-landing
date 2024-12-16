import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Globe, Target } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { MobileSidebar } from "@/components/sidebar-nav"

export default function Phase3Page() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="Phase 3: ShibaVerse Development" 
        description="Creating an immersive metaverse experience for the SUNSHIBA community"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="Metaverse Launch"
          description="Full release of the ShibaVerse platform with virtual worlds and social spaces."
          icon={Globe}
        />
        <FeatureCard
          title="Gaming Integration"
          description="Introduction of play-to-earn games and interactive experiences."
          icon={Gamepad2}
        />
        <FeatureCard
          title="Ecosystem Expansion"
          description="Cross-chain functionality and enhanced DeFi features."
          icon={Target}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Development Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Q3 2024</h4>
              <ul className="mt-2 space-y-2">
                <li>• ShibaVerse alpha testing</li>
                <li>• Virtual land NFT presale</li>
                <li>• Game development partnerships</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Q4 2024</h4>
              <ul className="mt-2 space-y-2">
                <li>• Beta launch of virtual worlds</li>
                <li>• Play-to-earn mechanics implementation</li>
                <li>• Cross-chain bridge deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Q1 2025</h4>
              <ul className="mt-2 space-y-2">
                <li>• Full metaverse launch</li>
                <li>• Mobile app integration</li>
                <li>• Enhanced marketplace features</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Future Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Phase 3 represents the culmination of our initial roadmap, but it&apos;s just the beginning of SunnyShiba&apos;s journey. Our vision extends beyond these milestones as we continue to innovate and expand the ecosystem based on community feedback and emerging technologies in the crypto space.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}