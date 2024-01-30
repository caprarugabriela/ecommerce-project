export const FooterSecondary = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto flex items-center justify-center  px-4 lg:px-0 flex-col gap-y-10 pt-8 pb-10">
        <p>&copy; {currentYear}. Created by Gabriela Capraru</p>
      </div>
    </footer>
  );
};
