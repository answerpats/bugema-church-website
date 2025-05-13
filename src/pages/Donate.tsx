
import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const DonationOption = ({
  title,
  description,
  amount,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  amount: number;
  selected: boolean;
  onSelect: () => void;
}) => (
  <div 
    className={`border rounded-lg p-5 cursor-pointer transition-colors ${
      selected 
        ? "border-church-accent bg-church-accent bg-opacity-5" 
        : "border-gray-200 hover:border-church-accent"
    }`}
    onClick={onSelect}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-medium text-lg">{title}</h3>
      <span className="text-lg font-semibold text-church-primary">${amount}</span>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Donate = () => {
  const [amount, setAmount] = useState<number | string>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [recurringDonation, setRecurringDonation] = useState(false);
  const [donationPurpose, setDonationPurpose] = useState("tithes");

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setAmount("custom");
    }
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate final amount
    const finalAmount = amount === "custom" ? parseFloat(customAmount) : amount;
    
    // This would typically send the data to a payment processor
    console.log({
      amount: finalAmount,
      paymentMethod,
      recurring: recurringDonation,
      purpose: donationPurpose
    });
    
    // Show success message
    toast.success("Thank you for your generous donation!");
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero
        title="Support Our Ministry"
        subtitle="Your generosity helps us spread God's love in our community"
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1800"
        small
      />

      {/* Donation Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Column - Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Make a Donation</h2>
                
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  {/* Donation Purpose Selection */}
                  <div>
                    <Label className="mb-2 block">Select Purpose</Label>
                    <Tabs 
                      defaultValue="tithes" 
                      className="w-full"
                      onValueChange={(value) => setDonationPurpose(value)}
                    >
                      <TabsList className="grid grid-cols-3">
                        <TabsTrigger value="tithes">Tithes</TabsTrigger>
                        <TabsTrigger value="offerings">Offerings</TabsTrigger>
                        <TabsTrigger value="building">Building Fund</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tithes">
                        <p className="text-sm text-church-gray mt-2">
                          Tithes support the ongoing ministry and operations of our church.
                        </p>
                      </TabsContent>
                      <TabsContent value="offerings">
                        <p className="text-sm text-church-gray mt-2">
                          Offerings go towards special projects and community outreach.
                        </p>
                      </TabsContent>
                      <TabsContent value="building">
                        <p className="text-sm text-church-gray mt-2">
                          The Building Fund supports maintenance and improvements to our facilities.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  {/* Donation Amount Selection */}
                  <div>
                    <Label className="mb-2 block">Select Amount</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                      {[50, 100, 200, 500, 1000].map((value) => (
                        <Button
                          key={value}
                          type="button"
                          variant={amount === value ? "default" : "outline"}
                          className={amount === value ? "bg-church-accent hover:bg-church-accent/90" : ""}
                          onClick={() => handleAmountClick(value)}
                        >
                          ${value}
                        </Button>
                      ))}
                      <Button
                        type="button"
                        variant={amount === "custom" ? "default" : "outline"}
                        className={amount === "custom" ? "bg-church-accent hover:bg-church-accent/90" : ""}
                        onClick={() => setAmount("custom")}
                      >
                        Custom
                      </Button>
                    </div>
                    {amount === "custom" && (
                      <div className="mt-3">
                        <Label htmlFor="customAmount">Custom Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
                          <Input
                            id="customAmount"
                            type="text"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="pl-6"
                            placeholder="Enter amount"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Recurring Donation Option */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="recurring"
                      checked={recurringDonation}
                      onChange={() => setRecurringDonation(!recurringDonation)}
                      className="h-4 w-4 rounded border-gray-300 text-church-accent focus:ring-church-accent"
                    />
                    <Label htmlFor="recurring">Make this a monthly recurring donation</Label>
                  </div>

                  {/* Payment Method Selection */}
                  <div>
                    <Label className="mb-2 block">Payment Method</Label>
                    <RadioGroup defaultValue="card" onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-3 border rounded-md p-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-grow cursor-pointer">
                          Credit/Debit Card
                        </Label>
                        <div className="flex gap-1">
                          <div className="h-6 w-10 bg-blue-600 rounded"></div>
                          <div className="h-6 w-10 bg-red-500 rounded"></div>
                          <div className="h-6 w-10 bg-yellow-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-md p-3">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex-grow cursor-pointer">
                          Mobile Money
                        </Label>
                        <div className="h-6 w-10 bg-green-600 rounded"></div>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-md p-3">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex-grow cursor-pointer">
                          Bank Transfer
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-church-accent hover:bg-church-accent/90 text-white py-3 text-lg"
                  >
                    Complete Donation
                  </Button>
                </form>
              </div>

              {/* Right Column - Information */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-4">Why Give?</h3>
                  <p className="text-church-gray mb-4">
                    Your donations help support our church's ministries, community outreach programs, building maintenance, and spreading God's word.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-church-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Support church operations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-church-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fund community outreach</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-church-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Support mission work</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-church-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Assist those in need</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-church-primary text-white p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-4">Other Ways to Give</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <div>
                        <span className="font-medium block">In-person</span>
                        <span className="text-sm opacity-80">During service times</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <span className="font-medium block">By Mail</span>
                        <span className="text-sm opacity-80">Send a check to our address</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <div>
                        <span className="font-medium block">Bank Transfer</span>
                        <span className="text-sm opacity-80">Contact for account details</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-church-primary mb-6">Your Donation Makes a Difference</h2>
            <p className="text-gray-700">
              Your generous contributions help fund our ministries and make a positive impact in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-church-accent text-4xl font-bold mb-4">30+</div>
              <h3 className="text-xl font-semibold mb-2">Community Outreach Events</h3>
              <p className="text-gray-600">Annually serving our local community through various programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-church-accent text-4xl font-bold mb-4">100+</div>
              <h3 className="text-xl font-semibold mb-2">Students Supported</h3>
              <p className="text-gray-600">Through our scholarship and mentoring programs each year.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-church-accent text-4xl font-bold mb-4">5</div>
              <h3 className="text-xl font-semibold mb-2">Local Missions</h3>
              <p className="text-gray-600">Funded projects supporting evangelism and community development.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
