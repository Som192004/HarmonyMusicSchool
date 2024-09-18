import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id ,
  title,
  slug,
  className,
  description,
  price ,
  instructor ,
  image ,
}: {
  id? : number ,
  className?: string;
  title?: string | React.ReactNode;
  slug? : string ,
  description?: string | React.ReactNode;
  price : number ,
  instructor : string,
  image : string ,
}) => {
  return (
    <div
      className={cn(
        "row-span-2 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-1 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <img src={image}></img>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-2xl font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-1">
          {title}
        </div>
        <div className="font-sans font-bold text-neutral-600 text-s dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans font-bold text-neutral-600 text-s dark:text-neutral-300">
          {slug}
        </div>
        <div className="font-bold text-neutral-600 text-s dark:text-neutral-300 mb-3">
          price : Rs {price}
          <br></br>
          Instructor : {instructor}
        </div>
        <center><button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-lg">Buy</button>
        </center>
      </div>
    </div>
  );
};
