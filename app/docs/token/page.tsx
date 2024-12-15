import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Shield, Zap, BarChart } from "lucide-react"

export default function TokenPage() {
  return (
    <div className="space-y-8 ">
      <PageHeader 
        title="Token Overview" 
        description="Everything you need to know about the SUNSHIBA token"
      />

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-2xl font-semibold">Token Details</h3>
              <p className="text-muted-foreground">
                SunnyShiba (SUNSHIBA) is built on the Solana blockchain, leveraging its high speed and low transaction costs.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Network</CardTitle>
                  <Zap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Solana</div>
                  <p className="text-xs text-muted-foreground">SPL Token Standard</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Supply</CardTitle>
                  <Coins className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1B</div>
                  <p className="text-xs text-muted-foreground">SUNSHIBA Tokens</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Audited</div>
                  <p className="text-xs text-muted-foreground">By CertiK</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$10M+</div>
                  <p className="text-xs text-muted-foreground">And Growing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Token Utility</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Governance voting rights</li>
              <li>• Access to ShibaVerse features</li>
              <li>• Staking rewards</li>
              <li>• NFT marketplace transactions</li>
              <li>• Community event participation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Where to Buy</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Raydium DEX</li>
              <li>• Orca DEX</li>
              <li>• Serum DEX</li>
              <li>• Jupiter Aggregator</li>
              <li>• More exchanges coming soon!</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}