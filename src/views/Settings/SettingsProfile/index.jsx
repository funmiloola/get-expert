import Form from "./form";

export default function SettingsProfile() {
    return (
        <section className="pt-8 md:pt-12">
            <h3 className="text-[18px] font-semibold">Personal Informations</h3>
      <p className="text-sm text-[#535862] pb-5 border-b border-b-[#E9EAEB]">
        Update your photo and personal details here.
            </p>
            <Form/>
        </section>
    )
}