import { useState, useEffect } from "react";

import { useToast } from "@/lib/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

import {
  Moon,
  Sun,
  RefreshCw,
  BarChart2,
  PieChart,
  LineChart,
  Save,
} from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [refreshRate, setRefreshRate] = useState("30");
  const [defaultChartType, setDefaultChartType] = useState("bar");
  const [showLegends, setShowLegends] = useState(true);
  const [enableAnimations, setEnableAnimations] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your dashboard settings have been updated.",
    });
  };

  const handleThemeToggle = (value: string) => {
    const html = document.documentElement;

    if (value === "dark") {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  // Check for saved dark mode preference on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "true" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="flex-1 overflow-auto">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account settings and set email preferences.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <RadioGroup
              id="theme"
              value={theme}
              onValueChange={(value) => {
                setTheme(value);
                handleThemeToggle(value);
              }}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">
                  <Sun className="mr-1 inline h-4 w-4" /> Light
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark">
                  <Moon className="mr-1 inline h-4 w-4" /> Dark
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="refresh-rate">Data Refresh Rate</Label>
            <Select value={refreshRate} onValueChange={setRefreshRate}>
              <SelectTrigger id="refresh-rate">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">
                  <RefreshCw className="mr-1 inline h-4 w-4" /> Every 15 seconds
                </SelectItem>
                <SelectItem value="30">
                  <RefreshCw className="mr-1 inline h-4 w-4" /> Every 30 seconds
                </SelectItem>
                <SelectItem value="60">
                  <RefreshCw className="mr-1 inline h-4 w-4" /> Every minute
                </SelectItem>
                <SelectItem value="300">
                  <RefreshCw className="mr-1 inline h-4 w-4" /> Every 5 minutes
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="default-chart">Default Chart Type</Label>
            <RadioGroup
              id="default-chart"
              value={defaultChartType}
              onValueChange={setDefaultChartType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bar" id="bar" />
                <Label htmlFor="bar">
                  <BarChart2 className="mr-1 inline h-4 w-4" /> Bar
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pie" id="pie" />
                <Label htmlFor="pie">
                  <PieChart className="mr-1 inline h-4 w-4" /> Pie
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="line" id="line" />
                <Label htmlFor="line">
                  <LineChart className="mr-1 inline h-4 w-4" /> Line
                </Label>
              </div>
            </RadioGroup>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="show-legends">Show Legends</Label>
            <Switch
              id="show-legends"
              checked={showLegends}
              onCheckedChange={setShowLegends}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-animations">Enable Animations</Label>
            <Switch
              id="enable-animations"
              checked={enableAnimations}
              onCheckedChange={setEnableAnimations}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings}>
            <Save className="mr-2 h-4 w-4" /> Save Settings
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
