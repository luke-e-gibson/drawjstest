import { Canvas, DrawProvider, PenColorChanger, PenWidthChanger, CanvasDebugButton } from "@luke-e-gibson/drawjs/react"

function App() {

  return (
    <>
      <DrawProvider>
        <h1 className="text-center text-2xl">Drawjs Demo</h1>
        <div
          className="container mx-auto p-4"
          style={{ height: `${window.innerHeight - 100}px` }}
        >
          <div className="flex justify-between py-3" style={{ width: "%50" }}>
            <div className="flex items-center">
              <label htmlFor="colorpicker" className="px-1">
                Color:
              </label>
              <PenColorChanger id="colorpicker" />
            </div>
            <div className="flex items-center">
              <label htmlFor="width" className="px-2">
                Pen Width:
              </label>
              <PenWidthChanger id="width" className="p-1 border rounded-md" />
            </div>
            <CanvasDebugButton className="p-2 border rounded-md" />
          </div>
          <Canvas className="w-full h-full"/>
        </div>
      </DrawProvider>
    </>
  );
}

export default App;
