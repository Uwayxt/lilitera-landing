import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Trophy, MessageCircle } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { MobileSidebar } from "@/components/sidebar-nav"

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="Community" 
        description="Join the sunniest and most vibrant community in crypto"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard
          title="Community Governance"
          description="Every SUNSHIBA holder has a voice in the project's future through our decentralized governance system."
          icon={Users}
        />
        <FeatureCard
          title="Charitable Initiatives"
          description="Our Bright Future Fund supports animal shelters and environmental causes worldwide."
          icon={Heart}
        />
        <FeatureCard
          title="Community Events"
          description="Regular AMAs, trading competitions, and community challenges with exciting rewards."
          icon={Trophy}
        />
        <FeatureCard
          title="Active Engagement"
          description="24/7 community support and regular updates from our dedicated team."
          icon={MessageCircle}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Community Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold">Official Channels</h4>
              <ul className="mt-2 space-y-2">
                <li>• Telegram: 50,000+ members</li>
                <li>• Discord: 25,000+ members</li>
                <li>• Twitter: 100,000+ followers</li>
                <li>• Reddit: 15,000+ subscribers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Community Benefits</h4>
              <ul className="mt-2 space-y-2">
                <li>• Early access to new features</li>
                <li>• Exclusive NFT drops</li>
                <li>• Community rewards program</li>
                <li>• Direct team interaction</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}