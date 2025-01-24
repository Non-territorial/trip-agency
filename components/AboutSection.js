import { useState } from "react";

export default function AboutSection() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
        setOpenSections((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle the specific section
        }));
    };

    const sections = [
        {
      title: "INTRO",
      content: (
        <>
          <p>
            TRIP Agency is a hybrid concept at the intersection of art and travel.
            Centered around unique private locations, art of sound, and cuisine.
            The term ‘TRIP’ goes beyond the idea of travel — it represents a
            transformative and immersive experience.
          </p>
          <p>
            Locations are chosen based on their natural, geographic, architectural,
            cinematic and cultural context. These settings are paired with curated
            sonic environments, audiovisual installations, exquisite cuisine, and
            fine wines, creating an ambiance that evokes the essence of a retreat.
          </p>
        </>
      ),
    },
    {
      title: "GUEST INFORMATION",
      content: (
        <>
          <p>
            TRIPS are scheduled during all seasons, each lasting 4 days and 3
            nights. To stay updated on booking availability, please sign up for
            our newsletter or complete the BOOK form. Note that we are unable to
            accept requests over the phone.
          </p>
          <p>
            When submitting your request, kindly specify the number of guests.
            Please be aware that TRIPS have limited capacity, accommodating an
            average of 8 to 40 participants, depending on the location.
          </p>
        </>
      ),
    },
    {
      title: "RESERVATIONS & CANCELLATIONS",
      content: (
        <>
          <h3>RESERVATIONS</h3>
          <p>
            Reservations are limited to one room for one or two people and include
            the entire package. Requests must specify the number of participants
            and the desired dates. If availability is limited due to high demand,
            we offer the option to join our waiting list for the next season.
          </p>
          <p>
            Once your dates are confirmed through correspondence, we will send you
            a reservation and payment link. This must be completed within the
            specified time frame (5 days) to finalize your booking. Please note
            that reservations are non-refundable unless we are able to rebook the
            reserved spots.
          </p>
          <h3>CANCELLATIONS</h3>
          <p>
            If you need to cancel your reservation, please email <a href="mailto:i@trip-agency.net" className="about-email">i@trip-agency.net</a> as soon as possible. We will make every effort to
            rebook your spot with another guest. If we successfully rebook your
            reservation, we will refund your fees.
          </p>
          <p>
            Please note: Reservations are non-refundable unless we can rebook your
            spot. Prompt notification of a cancellation helps us facilitate the
            rebooking process.
          </p>
        </>
      ),
    },
    {
      title: "FEES",
      content: (
        <>
          <p>
            FEES vary depending on multiple factors, they range between 3.500 and
            10.000 EUR. Once your date is secured, you will receive an email with
            payment instructions and confirmation details.
          </p>
          <p>
            Reservations are confirmed only after we receive both your completed
            reservation form and full payment within five days of the hold email.
            Please note that payment cannot be accepted upon arrival at the
            location.
          </p>
          <p>
            If you need to cancel your booking after making payment, please notify
            us as soon as possible. Refunds are available if we successfully
            rebook your trip date for another guest, regardless of the reason for
            the cancellation.
          </p>
        </>
      ),
    },
    {
      title: "ACCOMMODATION",
      content: (
        <>
          <p>
            TRIP Agency organizes its events in private residences, villas, or
            boutique hotels. The journey cost includes the entire stay, with all
            meals provided. However, dining is optional, and guests are welcome to
            make their own arrangements if they prefer.
          </p>
          <p>
            If you have specific dietary requirements, please let us know in
            advance so we can accommodate your needs.
          </p>
        </>
      ),
    },
    {
      title: "ARRIVAL & DEPARTURE",
      content: (
        <>
          <p>
            TRIP Agency provides transportation to and from the airport. All guests
            are required to arrive on the first day of the TRIP, no later than
            2:00 p.m.
          </p>
          <p>
            You will receive detailed meeting point instructions once your
            reservation is confirmed. Please note that daytime trips or short
            visits cannot be accommodated.
          </p>
          <p>
            If you plan to extend your stay beyond the TRIP Agency event, please
            inform us at the time of booking so we can assist with arrangements.
          </p>
          <p>
            It is essential to plan your travel to align with the event schedule,
            as off-schedule trips cannot be accommodated. Guests arriving at
            different times (late arrival, or day after) will need to arrange
            their own transportation to the location.
          </p>
        </>
      ),
    },
    {
      title: "CLIMATE CONDITIONS",
      content: (
        <>
          <p>
            Climate conditions vary based on the geography of each location. Once
            your reservation is confirmed, we will provide detailed information
            and tips to help you prepare for the expected weather.
          </p>
        </>
      ),
    },
    {
      title: "SOCIAL MEDIA RESTRICTIONS",
      content: (
        <>
          <p>
            To respect the unique nature of the event, we kindly request that
            guests refrain from using smartphones and social media during their
            stay, respecting both privacy and the atmosphere of the setting.
          </p>
          <p>
            Images of the exhibitions may be shared with prior written consent
            from TRIP Agency.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="about" className="info-section">
        <h2 className="about">About</h2>
        {sections.map((section, index) => (
            <div className="info-item" key={index}>
                <h3
                    className="dropdown-toggle"
                    onClick={() => toggleSection(index)}
                >
                    {section.title}{" "}
                    <span>{openSections[index] ? "v" : ">"}</span>
                </h3>
                {openSections[index] && (
                    <div className="info-item-content">{section.content}</div>
                )}
            </div>
        ))}
    </section>
);
}

