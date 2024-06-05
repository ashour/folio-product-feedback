import IconChatBubble from "@/app/_components/icons/IconChatBubble";
import IconCheckmark from "@/app/_components/icons/IconCheckmark";
import IconChevronLeft from "@/app/_components/icons/IconChevronLeft";
import IconChevronUp from "@/app/_components/icons/IconChevronUp";
import IconCross from "@/app/_components/icons/IconCross";
import IconDetective from "@/app/_components/icons/IconDetective";
import IconHamburger from "@/app/_components/icons/IconHamburger";
import IconLightBulb from "@/app/_components/icons/IconLightBulb";
import IconPen from "@/app/_components/icons/IconPen";
import IconPlusSign from "@/app/_components/icons/IconPlusSign";
import NavLayout from "../_layout/NavLayout";

export default function Home() {
  return (
    <NavLayout>
      <main className="bg-white px-[6.4%]">
        <h1 className="mb-3 text-h1">Sed egestas ante et vulputate volutpat</h1>
        <h2 className="mb-3 text-h2">
          Vestibulum volutpat acus a ultrices sagittis
        </h2>
        <h3 className="mb-2 text-h3">
          Pellentesque a diam sit amet mi ullamcorper vehicula
        </h3>
        <h4 className="text-h4">
          Ut scelerisque hendrerit tellus. Integer sagittis
        </h4>

        <h2 className="mb-3 mt-6 text-h2">Body 1 text</h2>
        <p className="text-body-1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis.
        </p>
        <h2 className="mb-3 mt-6 text-h2">Body 2 text</h2>
        <p className="text-body-2">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus{" "}
          <span className="bg-blue text-white">libero eu augue</span>. Morbi
          purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
          lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
          felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
          euismod dui, eu pulvinar{" "}
          <span className="bg-slate-50 text-slate-600">nunc sapien</span> ornare
          nisl. Phasellus pede arcu
        </p>
        <h2 className="mb-3 mt-6 text-h2">Body 3 text</h2>
        <p className="text-body-3">
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue.{" "}
          <span className="bg-peach-200 text-white">Morbi purus libero</span>,
          faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
          Praesent elementum hendrerit tortor. Sed semper lorem at felis.
          Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui,
          eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
        </p>
        <h2 className="mb-3 mt-6 text-h2">Icons</h2>
        <p className="flex items-center gap-2">
          <IconChevronLeft />
          <IconChevronUp />
          <i className="block -scale-x-100">
            <IconChevronLeft />
          </i>
          <i className="block -scale-y-100">
            <IconChevronUp />
          </i>
          <IconChatBubble />
          <IconCheckmark />
        </p>
        <p className="mt-3 flex items-center gap-2 bg-slate-600 p-2">
          <IconLightBulb />
          <IconPlusSign />
          <IconPen />
          <IconCross />
          <IconHamburger />
        </p>
        <p className="mt-6 flex items-center">
          <IconDetective />
        </p>
      </main>
    </NavLayout>
  );
}
