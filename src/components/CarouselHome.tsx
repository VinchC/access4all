import { Task } from "@/app/types";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import stars from "../../public/images/stars.png";

export default function CarouselHome({ tasks }: { tasks: Task[] | null }) {
  return (
    <Carousel className="carousel" interval={3000}>
      <Image
        src={stars}
        width={800}
        height={200}
        alt="an image of the stars visible from the solar system"
      />
      {tasks
        ? tasks.map((task, index) => (
            <Carousel.Item key={index}>
              <h3>{task.title}</h3>
            </Carousel.Item>
          ))
        : ""}
    </Carousel>
  );
}
