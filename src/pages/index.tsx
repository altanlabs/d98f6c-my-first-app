import { motion } from "framer-motion";
import { ArrowRight, DollarSign, TrendingUp, Target, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Chart } from "@/components/ui/chart";
import { Alert } from "@/components/ui/alert";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Dashboard Section */}
      <motion.section
        className="grid gap-8 md:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Expenses Chart */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Monthly Expenses</h3>
              <Chart type="bar" data={{ /* Add data here */ }} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Investments Chart */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Investments</h3>
              <Chart type="line" data={{ /* Add data here */ }} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Savings Goals Chart */}
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Savings Goals</h3>
              <Chart type="pie" data={{ /* Add data here */ }} />
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Notifications Section */}
      <motion.section
        className="space-y-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Upcoming Bill Payments
          </h2>
          <Alert variant="warning" className="mt-4">
            <Bell className="mr-2 h-5 w-5" />
            You have upcoming bills due soon. Please check your payment schedule.
          </Alert>
        </motion.div>
      </motion.section>
    </div>
  );
}
