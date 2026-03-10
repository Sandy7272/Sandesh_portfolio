export function Footer() {
  return (
    <footer className="section-container py-10 border-t border-border/50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Designed & built by Sandesh Gadakh
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
