import { motion } from "framer-motion";

const nomes = [
  { id: 1, text: "André Marcolongo - RM 555285" },
  { id: 2, text: "Davi Gonzaga Ferreira - RM 554890" },
  { id: 3, text: "Leandro Correia - RM 556203" },
];

const ScrollNomes = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex flex-row gap-4 font-Gruppo"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {nomes.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 10,
              ease: "easeInOut",
            }}
            key={item.id}
          >
            {item.text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollNomes;
