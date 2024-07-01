
interface Review {
    content: string;
    name: string;
}

const reviews: Review[] = [
    {
        content: ` "Varelas Landscaping transformed our backyard into a beautiful oasis. Their
                        team was incredibly professional and creative, helping us design a space
                         that exceeded our expectations. They took care of everything
                         from the initial planning to the final touches,and the results are
                         stunning. Our garden has become our favorite place to relax
                         and entertain. Highly recommend Varela's Landscaping for any
                         Landscaping project!"`,
        name: 'Jessica L.'
    },
    {
        content: ` "We hired Varelas Landscaping to revamp our front yard, and we are absolutely thrilled
                        with the
                        outcome. They were attentive to our preferences and provided
                        excellent suggestions to enhance our ideas.
                        The crew worked efficiently and left everything neat and tidy.
                        Our new landscaping has greatly improved our home's
                        curb appeal. Thank you, Varelas Landscaping, for your exceptional service and dedication!"
                        `,
        name: 'Michael W.'
    },
    {
        content: ` "Varelas Landscaping did an amazing job with our hardwood floors. From the initial consultation to the
                     final installation, their team was professional, knowledgeable, and attentive to our needs. We chose
                     a beautiful Brazilian Cherry wood, and the result is absolutely stunning. Our Home
                     feels warmer and more inviting. I highly recommend Varelas Landscaping for anyone considering
                      hardwood flooring!"`,
        name: 'Sarah M.'
    }
];
const Reviews = () => {
    return (
        <div className="flex flex-col items-start justify-center bg-base-100 w-full py-12 px-8">
            <h2 className="text-primary text-3xl text-start">WHAT OUR CLIENTS SAY</h2>
            <div className="flex flex-col md:flex-row md:py-8 items-center justify-center gap-4 w-full">
                {reviews.map((review,index) => <div key={index} className="flex flex-col items-center justify-center">
                    <hr className="w-full max-w-[20%] bg-secondary h-[2px] mt-4 place-self-start mb-4" />
                    <p className="text-neutral-600">
                        {review.content}
                    </p>
                    <p className='font-bold text-2xl text-black place-self-start mt-4'>{review.name}</p>
                </div>)}
                {/* <div className="flex flex-col items-center justify-center">
                    <hr className="w-full max-w-[20%] bg-secondary h-[2px] mt-4 place-self-start mb-4" />
                    <p className="text-neutral-600">&quot;
                        &quot;We hired Varelas Landscaping to revamp our front yard, and we are absolutely thrilled
                        with the
                        outcome. They were attentive to our preferences and provided
                        excellent suggestions to enhance our ideas.
                        The crew worked efficiently and left everything neat and tidy.
                        Our new landscaping has greatly improved our home&apos;s
                        curb appeal. Thank you, Varelas Landscaping, for your exceptional service and dedication!
                        &quot;</p>
                    <p className='font-bold text-2xl text-black place-self-start mt-4'>Michael W.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <hr className="w-full max-w-[20%] bg-secondary h-[2px] mt-4 place-self-start mb-4" />
                    <p className="text-neutral-600">&quot;
                     Varelas Landscaping did an amazing job with our hardwood floors. From the initial consultation to the
                     final installation, their team was professional, knowledgeable, and attentive to our needs. We chose
                     a beautiful Brazilian Cherry wood, and the result is absolutely stunning. Our Home
                     feels warmer and more inviting. I highly recommend Varelas Landscaping for anyone considering
                      hardwood flooring!
                        &quot;</p>
                    <p className='font-bold text-2xl text-black place-self-start mt-4'>Sarah M.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Reviews;