import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "@/components/charts/pie-chart"

export default function TokenomicsPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Tokenomics" 
        description="Understanding SUNSHIBA's token distribution and economics"
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Token Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="aspect-square">
                <PieChart 
                  data={[
                    { name: "Liquidity Pool", value: 50 },
                    { name: "Community Reserve", value: 15 },
                    { name: "Marketing", value: 10 },
                    { name: "Development", value: 5 },
                    { name: "Initial Burn", value: 20 },
                  ]}
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Distribution Breakdown</h4>
                <ul className="space-y-2">
                  <li>• 50% - Liquidity Pool</li>
                  <li>• 15% - Community Reserve</li>
                  <li>• 10% - Marketing</li>
                  <li>• 5% - Development</li>
                  <li>• 20% - Initial Burn</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Each transaction includes a 5% tax distributed as follows:</p>
              <ul className="space-y-2">
                <li>• 2% - Liquidity Pool</li>
                <li>• 1% - Holder Rewards</li>
                <li>• 1% - Marketing</li>
                <li>• 1% - Burn</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deflationary Mechanism</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">SUNSHIBA implements a deflationary model through:</p>
              <ul className="space-y-2">
                <li>• Regular token burns</li>
                <li>• Transaction burn tax</li>
                <li>• Special event burns</li>
                <li>• Community-voted burn events</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}