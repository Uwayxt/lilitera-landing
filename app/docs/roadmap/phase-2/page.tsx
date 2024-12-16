import { PageHeader } from "@/components/page-header"
import { MobileSidebar } from "@/components/sidebar-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timer, Rocket } from "lucide-react"

export default function Phase2Page() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="Phase 2: Utility Expansion" 
        description="Building the core features of the SunnyShiba ecosystem"
      />

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                <h3 className="text-2xl font-semibold">Current Progress</h3>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Staking Platform</span>
                  <span className="text-green-500">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span>NFT Collection</span>
                  <span className="text-yellow-500">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span>Mobile Wallet</span>
                  <span className="text-blue-500">Development</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                <h3 className="text-2xl font-semibold">Next Steps</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <li>• Launch NFT marketplace</li>
                <li>• Release mobile wallet beta</li>
                <li>• Expand exchange listings</li>
                <li>• Begin ShibaVerse development</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Development Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Staking pools optimization</li>
              <li>• NFT smart contract audit</li>
              <li>• Mobile wallet security testing</li>
              <li>• Cross-chain bridge research</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• 100,000+ holders milestone</li>
              <li>• Regional community expansion</li>
              <li>• Ambassador program launch</li>
              <li>• Enhanced marketing campaigns</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}