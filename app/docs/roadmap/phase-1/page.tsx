import { PageHeader } from "@/components/page-header"
import { MobileSidebar } from "@/components/sidebar-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function Phase1Page() {
  return (
    <div className="space-y-8">
      <MobileSidebar />
      <PageHeader 
        title="Phase 1: Launch & Community Building" 
        description="The foundation of SunnyShiba's bright future"
      />

      <Card>
        <CardHeader>
          <CardTitle>Launch Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Token Creation and Audit</h4>
                <p className="text-muted-foreground">Smart contract development and security audit by CertiK completed</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Initial DEX Offering</h4>
                <p className="text-muted-foreground">Successful launch on Raydium and Orca DEX with strong liquidity</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Community Growth</h4>
                <p className="text-muted-foreground">Established strong presence on social media platforms</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Technical Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Smart contract deployment</li>
              <li>• Security audit completion</li>
              <li>• Website and documentation launch</li>
              <li>• Wallet integration</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• 50,000+ holders achieved</li>
              <li>• Social media presence established</li>
              <li>• Community moderators onboarded</li>
              <li>• Initial partnerships secured</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}