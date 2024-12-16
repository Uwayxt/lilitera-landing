import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Gift, Sparkles, Target } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { MobileSidebar } from "@/components/sidebar-nav"

export default function RewardsPage() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="Sunny Rewards" 
        description="Earn passive income while holding SUNSHIBA tokens"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Staking Rewards"
          description="Earn up to 15% APY by staking your SUNSHIBA tokens in our secure staking pools."
          icon={Coins}
        />
        <FeatureCard
          title="Holder Benefits"
          description="Automatic rewards distribution: 1% of all transactions goes back to holders."
          icon={Gift}
        />
        <FeatureCard
          title="Special Events"
          description="Participate in community events and challenges to earn bonus rewards."
          icon={Sparkles}
        />
        <FeatureCard
          title="Loyalty Program"
          description="Long-term holders receive increased rewards and exclusive benefits."
          icon={Target}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rewards Program Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Staking Tiers</h4>
              <ul className="mt-2 space-y-2">
                <li>• Bronze (1-6 months): 8% APY</li>
                <li>• Silver (6-12 months): 10% APY</li>
                <li>• Gold (12+ months): 15% APY</li>
                <li>• Diamond (24+ months): 20% APY</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Additional Benefits</h4>
              <ul className="mt-2 space-y-2">
                <li>• NFT staking multipliers</li>
                <li>• Governance voting power</li>
                <li>• ShibaVerse privileges</li>
                <li>• Early access to new features</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}