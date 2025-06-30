import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../../../components/Layout'

interface ServicePageProps {
  brand: string
  service: string
  location: string
}

export default function ServicePage({ brand, service, location }: ServicePageProps) {
  const title = `${brand} ${service} Service Center in ${location}`
  
  return (
    <Layout>
      <NextSeo
        title={title}
        description={`Authorized ${brand} ${service} repair and service center in ${location}. Expert technicians, genuine parts, and quick service.`}
        canonical={`https://www.varshaenterprise.com/services/${brand.toLowerCase()}/${service.toLowerCase()}`}
      />
      
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional {brand} {service} repair and maintenance services in {location}.
              We are an authorized service center with expert technicians.
            </p>
          </div>

          {/* Service Details */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Repair and Maintenance</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Installation and Setup</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Genuine Parts Replacement</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Annual Maintenance Contracts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Authorized Service Center</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Expert Technicians</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>90-Day Service Warranty</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-blue-600">✓</span>
                    <span>Competitive Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="bg-blue-600 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 rounded-3xl">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need {brand} {service} Service?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                  Book a service appointment today and get expert repair service at your doorstep
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="tel:+919414456385"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Call Now: 9414456385
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Define the brands and services you offer
  const brands = [
    'Samsung', 'LG', 'Whirlpool', 'Voltas', 'Daikin', 'Godrej',
    'Haier', 'Panasonic', 'Hitachi', 'IFB', 'Blue Star', 'Carrier'
  ]
  
  const services = [
    'AC', 'LED TV', 'Washing Machine', 'Refrigerator',
    'Microwave', 'Water Purifier', 'Geyser'
  ]

  // Generate all possible combinations of brand and service
  const paths = brands.flatMap(brand =>
    services.map(service => ({
      params: {
        brand: brand.toLowerCase().replace(/\s+/g, '-'),
        service: service.toLowerCase().replace(/\s+/g, '-')
      }
    }))
  )

  return {
    paths,
    fallback: false // Show 404 for any paths not generated
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const brand = (params?.brand as string).split('-').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
  
  const service = (params?.service as string).split('-').map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return {
    props: {
      brand,
      service,
      location: 'Ajmer'
    }
  }
} 