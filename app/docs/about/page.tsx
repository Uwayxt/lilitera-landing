import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="space-y-8 w-full">
      <PageHeader 
        title="About SunnyShiba" 
        description="Learn about our mission, vision, and the team behind SunnyShiba"
      />

      <div className="grid gap-6 w-full">
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">
                  SunnyShiba envisions a crypto ecosystem where positivity, community engagement, and financial innovation converge. We&apos;re not just creating another meme coin; we&lsquo;re building a platform that brings joy and value to our holders while contributing to the broader crypto community.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80"
                  alt="Shiba Inu dog looking happy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold">Mission Statement</h3>
              <p className="mt-2 text-muted-foreground">
                Our mission is to create a vibrant, inclusive crypto community that combines the fun of meme coins with real utility and sustainable growth. Through innovative features, community governance, and charitable initiatives, we aim to make crypto more accessible and enjoyable for everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold">Core Values</h3>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>• Transparency in all operations</li>
                <li>• Community-first approach</li>
                <li>• Sustainable growth</li>
                <li>• Innovation in DeFi</li>
                <li>• Positive impact</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}