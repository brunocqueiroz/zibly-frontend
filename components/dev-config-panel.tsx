"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Settings, Database, Cloud, Activity } from "lucide-react"
import config from "@/lib/config"
import { testBackendConnection, testBasicConnectivity, testAccountCreation } from "@/lib/test-backend"

export default function DevConfigPanel() {
  const [useMockData, setUseMockData] = useState(config.features.useMockData)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true)
    }
  }, [])

  const handleToggle = (enabled: boolean) => {
    setUseMockData(enabled)
    // In a real app, you'd want to update the environment variable
    // For now, we'll just show the current state
    console.log(`Mock data mode: ${enabled ? 'ON' : 'OFF'}`)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <CardTitle className="text-lg">Development Config</CardTitle>
          </div>
          <CardDescription>
            Toggle between mock data and FastAPI backend
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {useMockData ? (
                <Database className="h-4 w-4 text-blue-500" />
              ) : (
                <Cloud className="h-4 w-4 text-green-500" />
              )}
              <span className="font-medium">
                {useMockData ? "Mock Data" : "FastAPI Backend"}
              </span>
              <Badge variant={useMockData ? "secondary" : "default"}>
                {useMockData ? "Local" : "API"}
              </Badge>
            </div>
            <Switch
              checked={useMockData}
              onCheckedChange={handleToggle}
            />
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <div><strong>Auth Backend:</strong> {useMockData ? 'Mock Data (Next.js API)' : 'FastAPI Backend'}</div>
            <div><strong>Current API URL:</strong> {config.api.baseUrl}</div>
            <div><strong>API Key:</strong> {config.api.key.substring(0, 8)}...</div>
          </div>

          <div className="text-xs bg-muted p-2 rounded">
            <strong>Note:</strong> {useMockData 
              ? "Using in-memory storage. Perfect for testing UI." 
              : "Using FastAPI backend. Ensure your backend is running."}
          </div>
          
          {!useMockData && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Activity className="h-4 w-4" />
                <span className="font-medium">Backend Tests</span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => testBasicConnectivity()}
                  className="flex-1"
                >
                  Basic Test
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => testBackendConnection()}
                  className="flex-1"
                >
                  Full Test
                </Button>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => testAccountCreation()}
                className="w-full"
              >
                Test Signup
              </Button>
              <div className="text-xs text-muted-foreground">
                Check browser console for test results
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
