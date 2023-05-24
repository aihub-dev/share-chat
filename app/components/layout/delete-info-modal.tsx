import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trash } from "lucide-react";
import Cookies from "js-cookie";

export default function DeleteInfoModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const desktopModalRef = useRef(null);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          ref={desktopModalRef}
          key="delete-modal"
          className="fixed inset-0 z-10 min-h-screen items-center justify-center flex"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onMouseDown={(e) => {
            if (desktopModalRef.current === e.target) {
              setShowModal(false);
            }
          }}
        >
          <div className="relative transform overflow-hidden rounded-lg bg-white border border-gray-200 text-left shadow-xl transition-all sm:my-8 sm:w-full mr-2 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Trash
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-1 sm:text-left">
                  <h3 className="font-semibold text-xl leading-6 text-gray-900">
                    介绍删除功能
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      AIHub 默认情况下，对话是不公开的，只能通过直接链接访问. 
                      它们不会被搜索引擎收录，除非它们超过100次浏览. <br /> <br />
                      如果你仍然想要删除这段对话，你可以在60秒内操作
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black transition-all border border-black sm:ml-3 sm:w-auto"
                onClick={() => setShowModal(false)}
              >
                好的，我了解了！
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-black transition-all sm:mt-0 sm:w-auto"
                onClick={() => {
                  Cookies.set("dismissedDeleteButtonModal", "true");
                  setShowModal(false);
                }}
              >
                我不想看到这个提示了
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
