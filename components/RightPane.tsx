import { ShoppingCart, Pencil, Mobile, Flag } from "motion-icons";

const RightPane = () => {
  return (
    <>
      <div className="flex flex-col p-10 space-y-3">
        <h5 className="relative z-10 my-3 text-3xl font-bold text-white title">
          About Me
        </h5>
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="text-white">
              I&apos;m a Frontend and Backend Developer from Kerala, India,
              working in web development. I enjoy turning complex problems into
              simple, beautiful and intuitive designs.
            </p>
            <p className="pt-3 text-white">
              I love working with React, Next, Python and MongoDB and are my
              goto for building a functional website.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-white">
              <strong className="px-2 text-lg font-bold text-blue-500">
                Age
              </strong>{" "}
              22
            </p>
            <p className="text-white">
              <strong className="px-2 text-lg font-bold text-blue-500">
                Residence
              </strong>{" "}
              Kerala, India
            </p>
            <p className="text-white">
              <strong className="px-2 text-lg font-bold text-blue-500">
                Address
              </strong>{" "}
              Punnakulam, Thiruvananthapuram
            </p>
            <p className="text-white">
              <strong className="px-2 text-lg font-bold text-blue-500">
                Email
              </strong>{" "}
              souravraveendranofficial@gmail.com
            </p>
            <p className="text-white">
              <strong className="px-2 text-lg font-bold text-blue-500">
                Phone
              </strong>{" "}
              +91 9567611892
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap p-10 space-y-3">
        <h5 className="relative z-10 my-3 text-3xl font-bold text-white title">
          What I Do
        </h5>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <ShoppingCart className="w-10 h-10 text-blue-500" />
            <h5 className="text-lg font-bold text-white">Ecommerce</h5>
            <p className="text-white">
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Pencil className="w-10 h-10 text-blue-500" />
            <h5 className="text-lg font-bold text-white">Copywriting</h5>
            <p className="text-white">
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Mobile className="w-10 h-10 text-blue-500" />
            <h5 className="text-lg font-bold text-white">Web Design</h5>
            <p className="text-white">
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <Flag className="w-10 h-10 text-blue-500" />
            <h5 className="text-lg font-bold text-white">Copywriting</h5>
            <p className="text-white">
              Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
              tortor bibendum massa, sit amet ultricies ex lectus scelerisque
              nibh. Ut non sodales.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPane;
