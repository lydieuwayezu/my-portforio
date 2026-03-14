import { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: "#0f172a" }}>
        <Toolbar className="flex justify-between">
          <span className="text-xl font-bold text-purple-400">Lydie.dev</span>
          <div className="hidden md:flex gap-6">
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-white hover:text-purple-400 transition">
                {l}
              </button>
            ))}
          </div>
          <IconButton className="md:hidden" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List className="w-48 bg-slate-900 h-full">
          {links.map((l) => (
            <ListItem button key={l} onClick={() => scrollTo(l)}>
              <ListItemText primary={l} className="text-white" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
