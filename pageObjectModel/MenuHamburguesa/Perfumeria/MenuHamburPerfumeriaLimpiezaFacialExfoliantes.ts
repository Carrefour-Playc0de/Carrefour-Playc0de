import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaLimpiezaFacialExfoliantes extends BasePage {

    readonly LIMPIEZA_FACIAL_EXFOLIANTES: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_FACIAL_EXFOLIANTES = this.page.locator('//*[@id="menu-item-category-limpieza-facial-exfoliantes"]')
    }

    async clickPerfumeriaLimpiezaFacialExfoliantes(): Promise<void> {
        await this.click(this.LIMPIEZA_FACIAL_EXFOLIANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaLimpiezaFacialExfoliantes(): Promise<void> {
        await this.clickPerfumeriaLimpiezaFacialExfoliantes()
    }
}
